
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessagesTable } from "./_components/messages-table";


export default async function AdminMessagesPage() {
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
          <MessagesTable />
        </CardContent>
      </Card>
    </div>
  );
}
