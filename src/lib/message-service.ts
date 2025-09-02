
"use server"

// This is a temporary, in-memory message store.
// In a real application, you would use a database like Firestore.

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: number;
  read: boolean;
}

let messages: Message[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'Hello, I was wondering if you do custom PC builds? I am looking for a high-end gaming rig.',
        timestamp: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
        read: false,
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        message: 'My iPhone 12 screen is cracked. Can you give me a quote for a screen replacement?',
        timestamp: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
        read: true,
    }
];

export async function getMessages(): Promise<Message[]> {
  // In a real app, you'd fetch from a database.
  // We'll sort so newest messages appear first.
  return [...messages].sort((a, b) => b.timestamp - a.timestamp);
}

export async function saveMessage(data: { name: string; email: string; message: string }): Promise<Message> {
  const newMessage: Message = {
    id: (messages.length + 1).toString(),
    ...data,
    timestamp: Date.now(),
    read: false,
  };
  messages.push(newMessage);
  // In a real app, you'd save to a database.
  console.log("New message saved:", newMessage);
  return newMessage;
}
