"use client";

import { FaTimes } from "react-icons/fa";
import { useChatBot } from "../context/ChatBotContext";

export default function ChatWindow() {
  const { closeChat } = useChatBot();

  return (
    <div
      className="
        fixed
        bottom-24
        right-6
        z-40

        w-[360px]
        h-[520px]

        rounded-2xl

        border
        border-gray-200
        dark:border-gray-700

        bg-white
        dark:bg-gray-900

        shadow-2xl

        flex
        flex-col

        overflow-hidden
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between

          px-5
          py-4

          border-b
          border-gray-200
          dark:border-gray-700
        "
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
        {/* AI Message */}
        <div
          className="
            max-w-[85%]

            rounded-xl

            bg-gray-100
            dark:bg-gray-800

            px-4
            py-3

            text-sm
          "
        >
          👋 Hello! I'm Raby's AI assistant.

          <br />
          <br />

          Ask me about:

          <ul className="mt-2 list-disc ml-5">
            <li>Projects</li>
            <li>Skills</li>
            <li>Education</li>
            <li>Experience</li>
          </ul>
        </div>
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
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="
              flex-1

              rounded-lg

              border
              border-gray-300
              dark:border-gray-700

              bg-transparent

              px-3
              py-2

              outline-none

              focus:ring-2
              focus:ring-blue-500
            "
          />

          <button
            className="
              rounded-lg

              bg-blue-600

              hover:bg-blue-700

              text-white

              px-4
            "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}