
"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type AnimationScene = 'circuits' | 'phones' | 'money';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [scene, setScene] = useState<AnimationScene>('circuits');
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Cycle through scenes every 10 seconds
    const sceneInterval = setInterval(() => {
      setScene(prevScene => {
        if (prevScene === 'circuits') return 'phones';
        if (prevScene === 'phones') return 'money';
        return 'circuits';
      });
    }, 10000);

    return () => {
      clearInterval(sceneInterval);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (theme !== 'dark') {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles: any[] = [];
    const particleColor = `hsl(${getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()})`;

    // =============== Particle Classes ===============
    class BaseParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number = 1;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
        this.radius = Math.random() * 2 + 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
    }

    class CircuitParticle extends BaseParticle {
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }
    
    class PhoneParticle extends BaseParticle {
      w: number;
      h: number;

      constructor(x: number, y: number){
        super(x, y);
        this.w = 10;
        this.h = 20;
        this.radius = 0; // Not used for drawing
      }

      draw() {
        ctx.strokeStyle = particleColor;
        ctx.globalAlpha = this.opacity;
        ctx.strokeRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h);

        // accessory
        ctx.beginPath();
        ctx.arc(this.x + 20, this.y, 5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.globalAlpha = 1;
      }
    }
    
    class MoneyParticle extends BaseParticle {
      initialX: number;
      constructor(x:number, y:number){
        super(x, y);
        this.initialX = x;
        this.vy = -(Math.random() * 0.5 + 0.2); // Move upwards
        this.vx = Math.sin(this.y / 20) * 0.5;
        this.opacity = 1;
      }

      update(){
        this.y += this.vy;
        this.x = this.initialX + Math.sin(this.y / 50) * 20;

        if (this.y < 0) {
            this.y = height;
            this.opacity = 1;
        }
        this.opacity -= 0.003;
        if (this.opacity < 0) this.opacity = 0;
      }

      draw(){
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = this.opacity;
        ctx.font = '20px sans-serif';
        ctx.fillText('$', this.x, this.y);
        ctx.globalAlpha = 1;
      }
    }

    // =============== Animation Logic ===============
    function init() {
      particles = [];
      const particleCount = scene === 'circuits' ? 100 : 30;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        if (scene === 'circuits') particles.push(new CircuitParticle(x,y));
        if (scene === 'phones') particles.push(new PhoneParticle(x,y));
        if (scene === 'money') particles.push(new MoneyParticle(x,height));
      }
    }

    function connectCircuits() {
      const connectionDistance = 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `hsla(${getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      if (scene === 'circuits') {
        connectCircuits();
      }
      
      animationFrameId.current = requestAnimationFrame(animate);
    }

    function handleResize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        init();
    }
    
    // Start animation
    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if(animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [theme, scene]);

  return <canvas id="neural-canvas" ref={canvasRef} />;
}

    