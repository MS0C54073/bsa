
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getMessages } from "@/lib/message-service";
import { Badge } from "@/components/ui/badge";

export default async function AdminMessagesPage() {
  const messages = await getMessages();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <h1 className="text-3xl font-bold font-headline tracking-tight text-primary">Contact Form Messages</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inbox</CardTitle>
        </CardHeader>
        <CardContent>
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
                  <TableCell className="text-right">{new Date(message.timestamp).toLocaleDateString()}</TableCell>
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
        </CardContent>
      </Card>
    </div>
  );
}
