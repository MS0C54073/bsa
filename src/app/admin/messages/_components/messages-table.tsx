
"use client"

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from '@/components/ui/skeleton';
import { Message } from '@/lib/message-service';

export function MessagesTable() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const messagesCol = collection(db, 'messages');
        const q = query(messagesCol, orderBy('timestamp', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messageList: Message[] = querySnapshot.docs.map(doc => {
                 const data = doc.data();
                 return {
                    id: doc.id,
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    timestamp: data.timestamp?.toDate()?.getTime() || Date.now(),
                    read: data.read,
                 }
            });
            setMessages(messageList);
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
            </div>
        )
    }

    return (
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
                <TableHead className="text-right">Received</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>
                    <Badge variant={message.read ? "secondary" : "default"}>
                      {message.read ? "Read" : "Unread"}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell className="max-w-xs truncate">{message.message}</TableCell>
                  <TableCell className="text-right">{new Date(message.timestamp).toLocaleString()}</TableCell>
                </TableRow>
              ))}
               {messages.length === 0 && (
                <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                        No messages yet.
                    </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
    )
}
