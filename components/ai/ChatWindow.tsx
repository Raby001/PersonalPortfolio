"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { chat } from "@/lib/ai";
import { useChatBot } from "../context/ChatBotContext";

const STORAGE_KEY = "portfolio-chat-history"

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hello! I'm Raby's AI assistant.\n\nAsk me about projects, skills, education, or experience.",
  },
];

export default function ChatWindow() {
  const { closeChat } = useChatBot();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to parse chat history:", error);
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(messages)
    );
  }, [messages, loaded]);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = input.trim();

    if (!message || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);
    setInput("");
    setIsLoading(true);

    try {
      const data = await chat(message);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: data.response || "I could not generate a response.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "Sorry, I could not reach the chat API right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className=" fixed bottom-24 right-6 z-40 w-[280px] h-[500px] sm:w-[400px] sm:h-[700px] rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div
        className=" flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700"
      >
        <div>
          <h2 className="font-semibold text-lg">
            Raby AI
          </h2>

          <p className="text-sm text-gray-500">
            Ask me anything about my portfolio.
          </p>
        </div>

        <button
          onClick={closeChat}
          className="
            p-2
            rounded-lg
            hover:bg-gray-100
            dark:hover:bg-gray-800
            cursor-pointer
            hover:text-indigo-600 dark:hover:text-amber-200
          "
        >
          <FaTimes />
        </button>
      </div>

      {/* Messages */}
      <div
        className="
          flex-1

          overflow-y-auto

          px-4
          py-4

          space-y-4
        "
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-4 py-3 text-sm whitespace-pre-wrap ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-xl bg-gray-100 dark:bg-gray-800 px-4 py-3 text-sm">
              Thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        className="
          border-t
          border-gray-200
          dark:border-gray-700

          p-4
        "
      >
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask me anything..."
            disabled={isLoading}
            className="flex-1 w-[85%] rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="
              rounded-lg

              bg-blue-600

              hover:bg-blue-700

              text-white

              px-4

              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {isLoading ? "..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
