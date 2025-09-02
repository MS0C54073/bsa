

"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Settings, Mail } from "lucide-react";
import { SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export function AdminSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <>
            <SidebarHeader>
                 <div className="flex items-center gap-2">
                    <Button asChild variant="ghost" className="h-auto p-0">
                        <Link href="/" className="text-2xl font-bold font-headline text-primary">
                            BSA
                        </Link>
                    </Button>
                 </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={isActive('/admin')}>
                            <Link href="/admin">
                                <LayoutDashboard />
                                <span>Dashboard</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={isActive('/admin/messages')}>
                            <Link href="/admin/messages">
                                <Mail />
                                <span>Messages</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={isActive('/admin/users')}>
                            <Link href="#">
                                <Users />
                                <span>Users</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={isActive('/admin/settings')}>
                            <Link href="#">
                                <Settings />
                                <span>Settings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
        </>
    )
}

