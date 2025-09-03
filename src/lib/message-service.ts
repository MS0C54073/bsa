
"use server"

import { db } from './firebase';
import { collection, addDoc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: any; // Firestore timestamp object
  read: boolean;
}

export async function getMessages(): Promise<Message[]> {
  const messagesCol = collection(db, 'messages');
  const q = query(messagesCol, orderBy('timestamp', 'desc'));
  const messageSnapshot = await getDocs(q);
  const messageList = messageSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
        id: doc.id,
        name: data.name,
        email: data.email,
        message: data.message,
        // Firestore timestamps need to be converted safely
        timestamp: data.timestamp?.toDate()?.getTime() || Date.now(),
        read: data.read,
    }
  });
  return messageList;
}

export async function saveMessage(data: { name: string; email: string; message: string }): Promise<{id: string}> {
  const messagesCol = collection(db, 'messages');
  const docRef = await addDoc(messagesCol, {
    ...data,
    timestamp: serverTimestamp(),
    read: false,
  });
  console.log("New message saved with ID:", docRef.id);
  return { id: docRef.id };
}
