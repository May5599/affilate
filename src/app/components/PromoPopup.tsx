"use client";

import { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PromoPopup() {
  const [show, setShow] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const openInstagram = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Try Instagram app
    window.location.href = "instagram://user?username=trndz.pro";

    // Fallback if app isn't installed
    setTimeout(() => {
      window.open("https://www.instagram.com/trndz.pro", "_blank");
    }, 450);
  };

  return (
    <>
      {/* POPUP */}
      {show && !minimized && (
        <div
          className="
            fixed inset-0 flex justify-center items-center
            bg-black/30 backdrop-blur-[1px]
            z-[999]
            animate-[fadeIn_0.45s_ease]
          "
          onClick={() => setShow(false)}
        >
          <div
            className="
              bg-white rounded-2xl shadow-xl w-[92%] max-w-sm p-5 mx-auto
              animate-[popupRise_0.55s_ease_forwards]
              relative
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setMinimized(true);
                setShow(false);
              }}
              className="absolute top-3 right-3 text-neutral-500 hover:text-black transition"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="text-center">
              <Image
                src="/logo.png"
                width={60}
                height={60}
                alt="Trndz Pro Logo"
                className="mx-auto mb-4 rounded-full"
              />

              <h3 className="text-lg font-semibold mb-1 text-neutral-800">
                Stay Updated
              </h3>

              <p className="text-neutral-500 text-sm mb-4 leading-relaxed px-2">
                Follow Trndz Pro on Instagram for weekly picks, new finds, and
                lifestyle updates.
              </p>

              {/* Smart Instagram Link */}
              <a
                href="instagram://user?username=trndz.pro"
                onClick={openInstagram}
                className="
                  inline-block bg-neutral-900 text-white px-6 py-2 rounded-full
                  text-sm font-medium hover:bg-black transition
                "
              >
                Follow @trndz.pro
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MINI BUBBLE */}
      {minimized && (
        <button
          onClick={() => {
            setMinimized(false);
            setShow(true);
          }}
          className="
            fixed bottom-5 left-5 z-[999]
            bg-neutral-900 text-white rounded-full shadow-lg
            px-4 py-2 text-xs font-medium
            flex items-center gap-2 animate-[bubbleIn_0.5s_ease]
          "
        >
          <Image
            src="/logo.png"
            width={22}
            height={22}
            alt="Trndz Pro"
            className="rounded-full"
          />
          Updates
        </button>
      )}

      {/* ANIMATIONS */}
      <style>{`
        @keyframes popupRise {
          0% { transform: translateY(35px); opacity: 0 }
          100% { transform: translateY(0); opacity: 1 }
        }

        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }

        @keyframes bubbleIn {
          from { transform: scale(0.6); opacity: 0 }
          to { transform: scale(1); opacity: 1 }
        }
      `}</style>
    </>
  );
}
