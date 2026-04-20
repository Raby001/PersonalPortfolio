"use client";

import { useState } from "react";
import { SendHorizontal, Loader2 } from "lucide-react";
import axios from "axios";
import { api } from "@/lib/axios";
import toast from "react-hot-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields ⚠️");
      return;
    }

    try {
      setLoading(true);

      await api.post("/api/contact", { name, email, message });

      toast.success("Message sent successfully 🚀");

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col py-[20px]">

      <div className="w-full max-w-[700px] flex flex-col items-start">

        {/* Title */}
        <div className="mb-10">
          <h1 className="text-[34px] font-bold">
            Contact me 💬
          </h1>
          <p className="text-center text-sm mt-2 text-gray-500 dark:text-gray-400">
            Let’s build something or just say hello 👋
          </p>
        </div>

      {/* Card */}
      </div>
      <div
          className="
          p-6 rounded-xl border w-full

          border-gray-200 bg-white shadow-sm

          dark:border-white/10 dark:bg-white/[0.04] dark:backdrop-blur-md

          transition
        "
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Inputs */}
            <div className="flex flex-col md:flex-row gap-4">

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                type="text"
                disabled={loading}
                className="
                  w-full px-4 py-2 rounded-md border text-sm outline-none

                  border-gray-200 bg-white text-black placeholder-gray-400

                  focus:ring-2 focus:ring-indigo-500/40

                  disabled:opacity-60 disabled:cursor-not-allowed

                  dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-500
                  dark:focus:ring-amber-400/30

                  transition
                "
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                type="email"
                disabled={loading}
                className="
                  w-full px-4 py-2 rounded-md border text-sm outline-none

                  border-gray-200 bg-white text-black placeholder-gray-400

                  focus:ring-2 focus:ring-indigo-500/40

                  disabled:opacity-60 disabled:cursor-not-allowed

                  dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-500
                  dark:focus:ring-amber-400/30

                  transition
                "
              />

            </div>

            {/* Textarea */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Say hello, give feedback, or send opportunities..."
              disabled={loading}
              className="
                w-full h-[160px] resize-none px-4 py-3 rounded-md border text-sm outline-none

                border-gray-200 bg-white text-black placeholder-gray-400

                focus:ring-2 focus:ring-indigo-500/40

                disabled:opacity-60 disabled:cursor-not-allowed

                dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-500
                dark:focus:ring-amber-400/30

                transition
              "
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full h-[44px] rounded-md flex items-center justify-center gap-2 text-sm font-medium

                bg-black text-white hover:bg-gray-800

                disabled:opacity-60 disabled:cursor-not-allowed

                dark:bg-white dark:text-black dark:hover:bg-gray-200

                transition
              "
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <SendHorizontal size={18} />
                </>
              )}
            </button>

            {/* Note */}
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              No spam, just clean communication 😄
            </p>

          </form>
      </div>

    </section>
  );
}