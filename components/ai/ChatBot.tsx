"use client";

import { useChatBot } from "../context/ChatBotContext";
import ChatWindow from "./ChatWindow";

export default function ChatBot() {
  const { open } = useChatBot();

  if (!open) return null;

  return <ChatWindow />;
}