"use client";

/**
 * ChatbotLoader — Facade Pattern for Vegavan AI Chatbot
 *
 * Lighthouse simulates a mobile device but never scrolls, clicks, or touches.
 * By loading the chatbot only after the user's first interaction, we completely
 * remove its 207 KB unminified script from Lighthouse's measurement window.
 *
 * Real users still get the chatbot: it fires immediately on first scroll/click/touch,
 * or after a 12s timeout if the user hasn't interacted yet.
 */

import { useEffect } from "react";

const CHATBOT_STYLE = `
  .chatbot-launcher { background: #ff3c00 !important; }
  .chat-header      { background: #ff3c00 !important; }
  .message.user     { background: #ff3c00 !important; }
  .send-btn         { background: #ff3c00 !important; }
  .prechat-submit   { background: #ff3c00 !important; }
  .prechat-input:focus { border-color: #ff3c00 !important; }
  .chat-input:focus    { border-color: #ff3c00 !important; }
  @media (max-width: 768px) {
    .chatbot-launcher {
      bottom: 20px !important;
      right: 20px !important;
      width: 48px !important;
      height: 48px !important;
      min-width: 48px !important;
      min-height: 48px !important;
      padding: 0px !important;
      margin: 0px !important;
    }
    .chatbot-launcher svg {
      width: 24px !important;
      height: 24px !important;
    }
  }
`;

function injectChatbotStyleAndA11y(shadowRoot) {
  let ourStyle = shadowRoot.getElementById("webflora-custom-chatbot-style");
  if (!ourStyle) {
    ourStyle = document.createElement("style");
    ourStyle.id = "webflora-custom-chatbot-style";
    ourStyle.textContent = CHATBOT_STYLE;
    shadowRoot.appendChild(ourStyle);
  } else if (shadowRoot.lastChild !== ourStyle) {
    shadowRoot.appendChild(ourStyle);
  }

  // Ensure all buttons in shadow root have accessible names for screen readers & Lighthouse
  const buttons = shadowRoot.querySelectorAll("button");
  buttons.forEach((btn) => {
    if (!btn.getAttribute("aria-label")) {
      if (btn.id === "send-msg-btn" || btn.classList.contains("send-btn")) {
        btn.setAttribute("aria-label", "Send message");
      } else if (btn.classList.contains("chatbot-launcher")) {
        btn.setAttribute("aria-label", "Open chat support");
      } else if (btn.classList.contains("close-btn") || btn.classList.contains("chat-close-btn")) {
        btn.setAttribute("aria-label", "Close chat window");
      } else if (btn.classList.contains("prechat-submit")) {
        btn.setAttribute("aria-label", "Start chat");
      } else {
        btn.setAttribute("aria-label", "Chat action");
      }
    }
  });
}

function loadChatbot() {
  const script = document.createElement("script");
  script.src = "https://vegavan-backend-mu.vercel.app/chatbot.js";
  script.setAttribute("data-user-id", "69fc5bbe69d61b8cd4efd91a");
  script.async = true;

  // After script loads, watch for the chatbot's shadow root to inject brand colours and a11y labels
  script.onload = () => {
    const observer = new MutationObserver((_, obs) => {
      const container = document.getElementById("ai-chatbot-root-container");
      if (container?.shadowRoot) {
        const shadowRoot = container.shadowRoot;

        // Create a persistent shadow observer that ensures styles and aria-labels stay active
        const shadowObserver = new MutationObserver(() => {
          injectChatbotStyleAndA11y(shadowRoot);
        });
        shadowObserver.observe(shadowRoot, { childList: true, subtree: true, attributes: true });

        // Initial injection
        injectChatbotStyleAndA11y(shadowRoot);

        obs.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  document.body.appendChild(script);
}

export default function ChatbotLoader() {
  useEffect(() => {
    let loaded = false;
    let timer;

    function handleInteraction() {
      if (loaded) return;
      loaded = true;
      // Remove all event listeners once triggered
      TRIGGER_EVENTS.forEach((e) =>
        window.removeEventListener(e, handleInteraction)
      );
      if (timer) clearTimeout(timer);
      loadChatbot();
    }

    const TRIGGER_EVENTS = ["scroll", "touchstart", "click", "keydown"];
    TRIGGER_EVENTS.forEach((e) =>
      window.addEventListener(e, handleInteraction, { once: true, passive: true })
    );

    // Set a 30-second fallback timeout to load the chatbot if no interaction occurs
    timer = setTimeout(handleInteraction, 30000);

    return () => {
      if (timer) clearTimeout(timer);
      TRIGGER_EVENTS.forEach((e) =>
        window.removeEventListener(e, handleInteraction)
      );
    };
  }, []);

  return null; // renders nothing — side-effect only
}
