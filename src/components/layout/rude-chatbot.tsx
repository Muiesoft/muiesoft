"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  chatbotScript,
  createReplyDeck,
  pickExit,
  pickGreeting,
  pickLoadingSequence,
} from "@/config/chatbot";
import { cn } from "@/lib/utils";

type Msg = { id: string; role: "bot" | "user"; text: string };

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isMobileViewport(): boolean {
  return window.matchMedia("(max-width: 767px)").matches;
}

function clearSheetGeometry(node: HTMLElement) {
  node.style.top = "";
  node.style.left = "";
  node.style.right = "";
  node.style.width = "";
  node.style.height = "";
  node.style.bottom = "";
  node.style.maxWidth = "";
  node.style.boxSizing = "";
  node.style.overflowX = "";
}

function applyMobileSheet(node: HTMLElement | null) {
  if (!node) return;
  if (!isMobileViewport()) {
    clearSheetGeometry(node);
    document.body.style.removeProperty("overflow");
    return;
  }
  document.body.style.overflow = "hidden";
  node.style.boxSizing = "border-box";
  node.style.overflowX = "hidden";
  node.style.right = "";
  node.style.bottom = "";
  const vv = window.visualViewport;
  if (!vv) {
    node.style.top = "0px";
    node.style.left = "0px";
    node.style.width = "100%";
    node.style.maxWidth = "100%";
    node.style.height = "100dvh";
    return;
  }
  node.style.top = `${vv.offsetTop}px`;
  node.style.left = `${vv.offsetLeft}px`;
  node.style.width = `${vv.width}px`;
  node.style.maxWidth = `${vv.width}px`;
  node.style.height = `${vv.height}px`;
}

export function RudeChatbot() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<"idle" | "loading" | "chat" | "gone">(
    "idle",
  );
  const [loadingLine, setLoadingLine] = useState<string>(
    chatbotScript.loadingLines[0],
  );
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [gone, setGone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const busyRef = useRef(false);
  const replyDeckRef = useRef<string[]>([]);

  const canType = open && phase === "chat" && !gone;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, draft, typing, open]);

  useEffect(() => {
    if (!canType) return;
    inputRef.current?.focus();
  }, [canType, messages.length, open, typing]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const sync = () => applyMobileSheet(panelRef.current);
    sync();
    const vv = window.visualViewport;
    vv?.addEventListener("resize", sync);
    vv?.addEventListener("scroll", sync);
    window.addEventListener("resize", sync);
    return () => {
      vv?.removeEventListener("resize", sync);
      vv?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  const typeBot = async (text: string) => {
    setTyping(true);
    setDraft("");
    const chunk = Math.max(1, Math.floor(text.length / 40));
    for (let i = 0; i < text.length; i += chunk) {
      setDraft(text.slice(0, i + chunk));
      await sleep(28 + Math.random() * 45);
    }
    setDraft("");
    setTyping(false);
    setMessages((prev) => [
      ...prev,
      { id: `b-${Date.now()}-${prev.length}`, role: "bot", text },
    ]);
  };

  const startSession = async () => {
    if (busyRef.current) return;
    busyRef.current = true;
    setPhase("loading");
    setMessages([]);
    setUserCount(0);
    setGone(false);
    replyDeckRef.current = createReplyDeck();
    for (const line of pickLoadingSequence(3)) {
      setLoadingLine(line);
      await sleep(550 + Math.random() * 400);
    }
    setPhase("chat");
    await sleep(200);
    await typeBot(pickGreeting());
    busyRef.current = false;
  };

  const handleOpen = () => {
    setOpen(true);
    if (phase === "idle" || phase === "gone") {
      void startSession();
    }
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text || busyRef.current || gone || phase !== "chat" || typing) return;
    busyRef.current = true;
    setInput("");
    requestAnimationFrame(() => inputRef.current?.focus());
    const nextCount = userCount + 1;
    setUserCount(nextCount);
    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: "user", text },
    ]);
    await sleep(400 + Math.random() * 500);

    if (nextCount >= chatbotScript.maxUserMessages) {
      await typeBot(pickExit());
      setGone(true);
      setPhase("gone");
      await sleep(1400);
      setOpen(false);
      busyRef.current = false;
      return;
    }

    const reply =
      replyDeckRef.current.shift() ??
      chatbotScript.replies[
        Math.floor(Math.random() * chatbotScript.replies.length)
      ];
    await typeBot(reply);
    busyRef.current = false;
  };

  return (
    <>
      {!open ? (
        <button
          type="button"
          onClick={handleOpen}
          className="fixed z-[65] inline-flex min-h-12 min-w-12 items-center justify-center gap-2 border border-acid bg-acid px-4 font-mono text-xs tracking-wider text-background uppercase shadow-lg"
          aria-label="Deschide Ghișoid"
          data-testid="chatbot-launcher"
        >
          <span className="font-mono text-xs tracking-wider">Ghișoid</span>
        </button>
      ) : null}

      {open ? (
        <div
          ref={panelRef}
          className={cn(
            "fixed z-[66] flex flex-col border border-border bg-surface-elevated",
            "max-md:rounded-none max-md:border-x-0 max-md:border-t-0 max-md:overflow-x-hidden",
            "md:h-[min(70dvh,520px)] md:w-[min(100%-2rem,380px)]",
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-title"
          data-testid="rude-chatbot"
          data-open="true"
          onMouseDown={(e) => {
            const target = e.target as HTMLElement;
            if (target.closest("button, a, input, textarea, label")) return;
            if (!canType) return;
            e.preventDefault();
            inputRef.current?.focus();
          }}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p
                id="chatbot-title"
                className="font-display text-sm font-bold uppercase"
              >
                {chatbotScript.name}
              </p>
              <p className="font-mono text-[10px] tracking-wider text-muted uppercase">
                {gone ? "OFFLINE · A PLECAT" : chatbotScript.status}
              </p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-9 min-w-9 items-center justify-center border border-border"
              aria-label="Închide chat"
              onClick={() => setOpen(false)}
            >
              <X size={16} />
            </button>
          </div>

          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4">
            {phase === "loading" ? (
              <div className="flex flex-col items-start gap-3">
                <div className="flex gap-1" aria-hidden>
                  <span className="status-pulse h-2 w-2 rounded-full bg-acid" />
                  <span className="status-pulse h-2 w-2 rounded-full bg-acid [animation-delay:150ms]" />
                  <span className="status-pulse h-2 w-2 rounded-full bg-acid [animation-delay:300ms]" />
                </div>
                <p className="font-mono text-xs text-muted">{loadingLine}</p>
              </div>
            ) : null}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "max-w-[90%] px-3 py-2 text-sm",
                  msg.role === "bot"
                    ? "border border-border bg-background"
                    : "ml-auto border border-acid/40 bg-acid/10",
                )}
              >
                {msg.text}
              </div>
            ))}

            {typing ? (
              <div className="max-w-[90%] border border-border bg-background px-3 py-2 text-sm">
                {draft || (
                  <span className="inline-flex gap-1" aria-label="Scrie...">
                    <span className="status-pulse">●</span>
                    <span className="status-pulse [animation-delay:150ms]">
                      ●
                    </span>
                    <span className="status-pulse [animation-delay:300ms]">
                      ●
                    </span>
                  </span>
                )}
                {draft ? (
                  <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-acid align-middle" />
                ) : null}
              </div>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <form
            className="shrink-0 border-t border-border p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              void handleSend();
            }}
          >
            <label htmlFor="rude-chat-input" className="sr-only">
              Mesaj
            </label>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                id="rude-chat-input"
                name="ghisoide-compose"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={!canType}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                inputMode="text"
                data-1p-ignore
                data-lpignore="true"
                data-form-type="other"
                placeholder={
                  gone
                    ? "A plecat."
                    : phase === "loading"
                      ? "Se conectează..."
                      : typing
                        ? "Scrie în continuare..."
                        : "Scrie ceva naiv..."
                }
                className="min-w-0 flex-1 border border-border bg-background px-3 py-2 text-sm outline-none focus:border-acid disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!canType || typing || !input.trim()}
                className="border border-acid bg-acid px-3 font-mono text-xs text-background uppercase disabled:opacity-40"
              >
                Trimite
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
