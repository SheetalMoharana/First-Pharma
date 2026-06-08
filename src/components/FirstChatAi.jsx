import { useEffect, useRef, useState } from "react";
import { X,  MessageCircle,Send, Star, Phone, Copy, Check } from "lucide-react";

const BOT_DELAY = 600;
const TYPING_DELAY = 900;

const OPTIONS = {
  "Order Issue": {
    icon: "📦",
    options: [
      "Where is my order?",
      "Order not received",
      "Wrong item delivered",
      "Order damaged in transit",
    ],
    replies: {
      "Where is my order?":
        "You can track your order from the 'My Orders' section. Tracking details are also sent to your registered email. Standard delivery takes 2–5 business days.",
      "Order not received":
        "We're sorry to hear that! If your expected delivery date has passed, we'll investigate immediately and arrange a re-shipment or full refund.",
      "Wrong item delivered":
        "We sincerely apologize for this. Please keep the item as received and we'll dispatch the correct product within 24 hours at no extra cost.",
      "Order damaged in transit":
        "We're sorry about the damaged shipment. Please share a photo of the damage and we'll send a replacement or process a full refund right away.",
    },
  },
  "Product Query": {
    icon: "🩺",
    options: [
      "Is this product right for me?",
      "Product not working properly",
      "How to use this equipment?",
      "Product compatibility question",
    ],
    replies: {
      "Is this product right for me?":
        "All our products are labelled with conditions they're suitable for. We recommend consulting your physiotherapist for personalized advice. You can also chat with our product specialist.",
      "Product not working properly":
        "Please ensure you've read the user manual included. If the issue persists, it may be covered under warranty. We'll arrange a free replacement or repair.",
      "How to use this equipment?":
        "Every product includes a usage guide. You can also find video tutorials on our product pages. Need help with a specific product? Tell us the product name.",
      "Product compatibility question":
        "Most of our braces and supports are adjustable. Please check the size chart on the product page. Our team can also help you find the right fit.",
    },
  },
  "Payment Issue": {
    icon: "💳",
    options: [
      "Charged but order not placed",
      "Refund not received",
      "Payment failed",
      "Incorrect amount charged",
    ],
    replies: {
      "Charged but order not placed":
        "If payment was deducted but the order wasn't confirmed, the amount will be automatically refunded within 48 hours. No action needed from your side.",
      "Refund not received":
        "Refunds typically take 5–7 business days depending on your bank. We're checking the status of your refund right now and will update you shortly.",
      "Payment failed":
        "Payment failures are usually due to bank-side issues. Please retry using a different payment method. Your previous attempt was not charged.",
      "Incorrect amount charged":
        "We're reviewing your transaction. If there's any discrepancy, a refund for the difference will be processed within 3 business days.",
    },
  },
  "Returns & Refunds": {
    icon: "🔄",
    options: [
      "How do I return a product?",
      "Return request rejected",
      "Refund status check",
      "Exchange for different size",
    ],
    replies: {
      "How do I return a product?":
        "You can initiate a return from 'My Orders' within 30 days of delivery. The item must be unused and in original packaging. Free pickup is available.",
      "Return request rejected":
        "Returns are accepted if the product is unused and in original condition. If you believe your return was incorrectly rejected, we'll review it manually.",
      "Refund status check":
        "Once your return is picked up and inspected (2–3 days), the refund is processed in 5–7 business days to your original payment method.",
      "Exchange for different size":
        "We offer free size exchanges within 30 days. Just initiate a return and select 'Exchange' — we'll ship the new size once we receive the original.",
    },
  },
  "Account & Login": {
    icon: "👤",
    options: [
      "Can't log into my account",
      "OTP not received",
      "Update my address",
      "Delete my account",
    ],
    replies: {
      "Can't log into my account":
        "Please try resetting your password via 'Forgot Password'. If you're still unable to log in, our team will verify your identity and restore access.",
      "OTP not received":
        "OTPs can take up to 60 seconds. Check your spam folder if using email OTP. We can resend the OTP or switch to an alternate verification method.",
      "Update my address":
        "You can update your delivery address from Account → Saved Addresses. For an ongoing order, please contact us immediately so we can update it before dispatch.",
      "Delete my account":
        "We're sorry to see you go. Account deletion is permanent and removes all order history. Please confirm and our team will process it within 48 hours.",
    },
  },
  "Shipping & Delivery": {
    icon: "🚚",
    options: [
      "Delivery taking too long",
      "Change delivery address",
      "Delivery to my pincode?",
      "Express delivery options",
    ],
    replies: {
      "Delivery taking too long":
        "Standard delivery is 2–5 business days. If it's been longer, we'll escalate with the courier partner and provide a firm delivery date within 24 hours.",
      "Change delivery address":
        "Address changes are possible only before the order is dispatched. Please contact us immediately with your order ID and new address.",
      "Delivery to my pincode?":
        "We deliver across 18,000+ pincodes in India. Enter your pincode on the product page to check availability. Some remote areas may take 1–2 extra days.",
      "Express delivery options":
        "Express delivery (1–2 days) is available on select products and pincodes. You'll see the express option at checkout if it's available for your area.",
    },
  },
};

const MAIN_CATEGORIES = [
  ...Object.keys(OPTIONS).map((k) => ({ label: k, icon: OPTIONS[k].icon })),
  { label: "Other", icon: "💬" },
];

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0">P</div>
      <div className="bg-slate-100 border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-cyan-500"
            style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}

function StarRating({ onRate }) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col gap-2 mt-1">
      <p className="text-slate-500 text-xs">Rate your support experience:</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            onMouseEnter={() => setHovered(s)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => {
              setSelected(s);
              onRate(s);
            }}
            className="transition-transform hover:scale-125"
          >
            <Star
              size={24}
              className={s <= (hovered || selected) ? "text-cyan-500 fill-cyan-500" : "text-slate-300"}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function FirstChatAi() {
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [step, setStep] = useState("WELCOME");
  const [currentCategory, setCurrentCategory] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [rated, setRated] = useState(false);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [unread, setUnread] = useState(0);

  const TICKET_REF = "PKT-" + Math.random().toString(36).slice(2, 8).toUpperCase();

  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  const addBot = (text, extra = {}) => {
    setIsTyping(false);
    setMessages((prev) => [...prev, { from: "bot", text, ...extra }]);
    if (!open) setUnread((u) => u + 1);
  };

  const addUser = (text) =>
    setMessages((prev) => [...prev, { from: "user", text }]);

  const botSay = (text, delay = BOT_DELAY, extra = {}) => {
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => addBot(text, extra), TYPING_DELAY);
    }, delay);
  };

  useEffect(() => { scrollToBottom(); }, [messages, isTyping, currentOptions]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      if (messages.length === 0) initChat();
    }
  }, [open]);

  const initChat = () => {
    botSay("👋 Hello! Welcome to First Pharma Support.", 300);
    setTimeout(() => {
      botSay("I'm here to help you with orders, products, payments, and more. How can I assist you today?", 300 + TYPING_DELAY + 400);
      setTimeout(() => {
        setCurrentOptions(MAIN_CATEGORIES);
        setStep("MAIN");
      }, 300 + TYPING_DELAY * 2 + 600);
    }, 0);
  };

  const handleOption = (option) => {
    const label = typeof option === "string" ? option : option.label;
    addUser(label);
    setCurrentOptions([]);
    setShowInput(false);

    if (step === "MAIN") {
      if (label === "Other") {
        botSay("Please describe your issue below and our team will get back to you:");
        setTimeout(() => setShowInput(true), BOT_DELAY + TYPING_DELAY + 200);
      } else {
        setCurrentCategory(label);
        botSay(`Got it — "${label}". Please choose a specific issue:`);
        setTimeout(() => {
          setCurrentOptions(OPTIONS[label].options.map((o) => o));
          setStep("SUB");
        }, BOT_DELAY + TYPING_DELAY + 200);
      }
    } else if (step === "SUB") {
      botSay(OPTIONS[currentCategory].replies[label]);
      setTimeout(() => askSolved(), BOT_DELAY + TYPING_DELAY + 400);
    } else if (step === "SOLVED") {
      handleSolved(label);
    } else if (step === "AGENT") {
      handleAgent(label);
    }
  };

  const askSolved = () => {
    botSay("Was this helpful? Is your issue resolved?", 0);
    setTimeout(() => {
      setCurrentOptions(["✅ Yes, resolved", "❌ No, still have issue", "🎧 Talk to live agent"]);
      setStep("SOLVED");
    }, TYPING_DELAY + 200);
  };

  const handleSolved = (answer) => {
    if (answer === "✅ Yes, resolved") {
      botSay("That's great! 🎉 Thank you for shopping with First Pharma.", 0, { showRating: true });
      setTimeout(() => setShowRating(true), TYPING_DELAY + 200);
      setStep("DONE");
    } else if (answer === "🎧 Talk to live agent") {
      botSay("Connecting you to a live support agent. Please hold on...", 0);
      setTimeout(() => {
        botSay("Our support team is available at:", 0, { showAgent: true });
        setStep("AGENT");
      }, TYPING_DELAY + 500);
    } else {
      botSay("I'm sorry to hear that. Let me raise a support ticket for you.", 0);
      setTimeout(() => {
        setShowTicketForm(true);
        setStep("TICKET");
      }, TYPING_DELAY + 300);
    }
  };

  const handleAgent = () => {};

  const submitTicket = () => {
    if (!orderId.trim()) return;
    addUser(`Order ID: ${orderId}`);
    setShowTicketForm(false);
    setOrderId("");
    botSay(
      `✅ Ticket raised successfully! Your ticket ID is **${TICKET_REF}**. Our support team will contact you within 2 hours.`,
      0,
      { ticketRef: TICKET_REF }
    );
    setTicketSubmitted(true);
    setTimeout(() => setShowRating(true), TYPING_DELAY + 500);
    setStep("DONE");
  };

  const submitFreeText = () => {
    if (!inputText.trim()) return;
    addUser(inputText);
    setShowInput(false);
    setInputText("");
    botSay("Thank you for describing your issue. Let me raise a ticket for you.", 0);
    setTimeout(() => {
      setShowTicketForm(true);
      setStep("TICKET");
    }, TYPING_DELAY + 300);
  };

  const copyTicket = () => {
    navigator.clipboard.writeText(TICKET_REF).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const restartChat = () => {
    setMessages([]);
    setCurrentOptions([]);
    setStep("WELCOME");
    setCurrentCategory("");
    setShowInput(false);
    setInputText("");
    setIsTyping(false);
    setShowRating(false);
    setRated(false);
    setShowTicketForm(false);
    setOrderId("");
    setTicketSubmitted(false);
    setTimeout(() => initChat(), 100);
  };

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%,60%,100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(16px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .chat-window { animation: fadeSlideUp 0.3s cubic-bezier(0.34,1.2,0.64,1) forwards; }
        .pulse-ring  { animation: pulse-ring 1.5s ease-out infinite; }
      `}</style>

      {/* Floating Button */}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-[100] flex flex-col items-end gap-3">
        {!open && (
          <div className="relative">
            <div className="pulse-ring absolute inset-0 rounded-full bg-cyan-400 pointer-events-none" />
            <button
              onClick={() => setOpen(true)}
              className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#1e3a5f] to-cyan-500 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(6,182,212,0.45)] transition-all active:scale-95 hover:shadow-[0_8px_40px_rgba(6,182,212,0.6)]"
            >
              {/* Physio cross / chat icon */}
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <rect x="3" y="3" width="20" height="20" rx="5" fill="rgba(255,255,255,0.15)" />
                <path d="M13 8v10M8 13h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="13" cy="13" r="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              </svg>
              {unread > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center">
                  {unread}
                </span>
              )}
            </button>
          </div>
        )}

        {/* Chat Window */}
        {open && (
          <div
            className="chat-window flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(30,58,95,0.18)]"
            style={{
              width: "min(360px, calc(100vw - 20px))",
              height: "min(520px, calc(100dvh - 190px))",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#1e3a5f] to-cyan-600 border-b border-cyan-700/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm border border-white/30">
                  P
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-none">First Pharma Support</p>
                  <p className="text-cyan-200 text-[10px] flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Online · Replies instantly
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={restartChat}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all text-xs font-bold"
                  title="Restart chat"
                >
                  ↺
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-3 bg-slate-50/50"
              style={{ scrollbarWidth: "none" }}
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "items-end gap-2"}`}>
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1e3a5f] to-cyan-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                      P
                    </div>
                  )}
                  <div
                    className={[
                      "px-3 py-2.5 rounded-2xl text-sm max-w-[80%] leading-relaxed",
                      msg.from === "user"
                        ? "bg-gradient-to-r from-[#1e3a5f] to-cyan-600 text-white font-semibold rounded-br-sm"
                        : "bg-white border border-slate-200 text-slate-700 rounded-bl-sm shadow-sm",
                    ].join(" ")}
                  >
                    {msg.text}

                    {/* Ticket ref copy */}
                    {msg.ticketRef && (
                      <div className="mt-2 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
                        <span className="text-cyan-600 text-xs font-black">{msg.ticketRef}</span>
                        <button onClick={copyTicket} className="ml-auto text-slate-400 hover:text-cyan-600 transition-colors">
                          {copied ? <Check size={13} /> : <Copy size={13} />}
                        </button>
                      </div>
                    )}

                    {/* Live agent info */}
                    {msg.showAgent && (
                      <div className="mt-2 flex flex-col gap-2">
                        <a
                          href="tel:+911800123456"
                          className="flex items-center gap-2 bg-gradient-to-r from-[#1e3a5f] to-cyan-600 text-white px-3 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-all"
                        >
                          <Phone size={13} /> Call: 1800-123-4567
                        </a>
                        <a
                          href="https://wa.me/911800123456"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-xl text-xs font-bold hover:bg-green-100 transition-all"
                        >
                          💬 WhatsApp Support
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && <TypingIndicator />}

              {/* Option buttons */}
              {!isTyping && currentOptions.length > 0 && (
                <div className="flex flex-col gap-2 ml-9">
                  {currentOptions.map((opt, i) => {
                    const label = typeof opt === "string" ? opt : opt.label;
                    const icon = typeof opt === "object" ? opt.icon : null;
                    return (
                      <button
                        key={i}
                        onClick={() => handleOption(opt)}
                        className="flex items-center gap-2.5 w-full text-left bg-white border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50 text-slate-700 text-xs font-semibold px-3.5 py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm"
                      >
                        {icon && <span className="text-sm">{icon}</span>}
                        {label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Free text input */}
              {showInput && (
                <div className="ml-9 flex gap-2">
                  <input
                    ref={inputRef}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitFreeText()}
                    placeholder="Describe your issue..."
                    className="flex-1 bg-white border border-slate-200 focus:border-cyan-400 rounded-xl px-3 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all"
                  />
                  <button
                    onClick={submitFreeText}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#1e3a5f] to-cyan-600 text-white flex items-center justify-center transition-all active:scale-95 flex-shrink-0 hover:shadow-md"
                  >
                    <Send size={15} />
                  </button>
                </div>
              )}

              {/* Ticket form */}
              {showTicketForm && (
                <div className="ml-9 bg-white border border-cyan-200 rounded-2xl p-3 flex flex-col gap-2 shadow-sm">
                  <p className="text-cyan-600 text-[10px] font-bold tracking-widest uppercase">Raise a Ticket</p>
                  <input
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitTicket()}
                    placeholder="Enter Order ID (e.g. PK-12345)"
                    className="bg-slate-50 border border-slate-200 focus:border-cyan-400 rounded-xl px-3 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all"
                  />
                  <button
                    onClick={submitTicket}
                    className="w-full bg-gradient-to-r from-[#1e3a5f] to-cyan-600 hover:opacity-90 text-white font-bold text-sm py-2.5 rounded-xl transition-all active:scale-[0.98]"
                  >
                    Submit Ticket
                  </button>
                </div>
              )}

              {/* Star rating */}
              {showRating && !rated && (
                <div className="ml-9 bg-white border border-slate-200 rounded-2xl p-3 shadow-sm">
                  <StarRating
                    onRate={(r) => {
                      setRated(true);
                      setShowRating(false);
                      addUser(`Rated: ${"⭐".repeat(r)}`);
                      botSay(
                        r >= 4
                          ? "🌟 Thank you for the great rating! We're glad we could help. Stay healthy & recover strong!"
                          : "Thank you for your feedback. We'll keep improving our service for you. Get well soon! 💙"
                      );
                    }}
                  />
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Bottom bar */}
            <div className="px-4 py-2 border-t border-slate-100 flex items-center justify-center bg-white">
              <p className="text-slate-400 text-[10px] tracking-wide">
                Powered by <span className="text-cyan-600 font-bold">First Pharma</span> Support
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}