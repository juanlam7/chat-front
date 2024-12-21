import { create } from "zustand";

export interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  shouldShake?: boolean;
}

export interface ConversationUser {
  _id: string;
  fullName: string;
  username: string;
  password?: string;
  gender?: "male" | "female";
  profilePic: string;
}

interface ConversationStore {
  selectedConversation: ConversationUser | null;
  setSelectedConversation: (selectedConversation: ConversationUser | null) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

const useConversation = create<ConversationStore>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
