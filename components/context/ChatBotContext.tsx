"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type ChatBotContextType = {
  open: boolean;
  toggle: () => void;
  openChat: () => void;
  closeChat: () => void;
};

const ChatBotContext =
  createContext<ChatBotContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function ChatBotProvider({
  children,
}: Props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const openChat = () => {
    setOpen(true);
  };

  const closeChat = () => {
    setOpen(false);
  };

  return (
    <ChatBotContext.Provider
      value={{
        open,
        toggle,
        openChat,
        closeChat,
      }}
    >
      {children}
    </ChatBotContext.Provider>
  );
}

export function useChatBot() {
  const context = useContext(ChatBotContext);

  if (!context) {
    throw new Error(
      "useChatBot must be used within ChatBotProvider"
    );
  }

  return context;
}