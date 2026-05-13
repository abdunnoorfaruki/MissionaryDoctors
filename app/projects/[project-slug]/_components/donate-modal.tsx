"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "../../types";
import { useDonation } from "./donation-context";
import { DonateCard } from "./donate-card";

interface DonateModalProps {
  project: Project;
}

export function DonateModal({ project }: DonateModalProps) {
  const { modalOpen, closeModal } = useDonation();

  // Body scroll lock + escape to close
  useEffect(() => {
    if (!modalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen, closeModal]);

  return (
    <AnimatePresence>
      {modalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
            aria-hidden
          />

          {/* Sheet / dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Donate"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="
              fixed z-50
              inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center
              sm:pointer-events-none
            "
          >
            <div
              className="
                bg-card border border-border
                rounded-t-3xl sm:rounded-2xl
                shadow-2xl
                w-full sm:w-110 sm:max-w-[92vw]
                max-h-[92vh] overflow-y-auto
                sm:pointer-events-auto
                relative
              "
            >
              {/* Drag handle (mobile) */}
              <div className="sm:hidden flex justify-center pt-2.5 pb-1">
                <div className="w-10 h-1 rounded-full bg-border" />
              </div>

              {/* Close button */}
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground z-10"
              >
                <X size={18} />
              </button>

              <div className="px-5 pb-6 pt-3 sm:px-7 sm:pt-7 sm:pb-7">
                <div className="mb-4 pr-8">
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-1.5">
                    {project.eyebrow.split("·")[0]?.trim()}
                  </div>
                  <h3 className="text-xl text-foreground font-medium leading-snug">
                    {project.title.leading}{" "}
                    <span className="text-destructive">{project.title.emphasis}</span>
                    {project.title.trailing}
                  </h3>
                </div>
                <DonateCard project={project} embedded />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
