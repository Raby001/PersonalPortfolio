"use client"

import { Bot, BotOff } from "lucide-react";
import { useChatBot } from "../context/ChatBotContext";

export default function ChatBotToggle() {

    const { open, toggle } = useChatBot();

    return (
        <button onClick={toggle}>
            {open ? (<BotOff className="cursor-pointer hover:text-indigo-600 dark:hover:hover:text-amber-200 " />) : (<Bot className="cursor-pointer hover:text-indigo-600 dark:hover:hover:text-amber-200"/>)}
        </button>
    )
}