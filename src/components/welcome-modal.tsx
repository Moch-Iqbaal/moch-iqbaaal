import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/src/components/ui/dialog";

import { Button } from "@/src/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

export function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    // Langsung buka setiap kali website dibuka
    setOpen(true);
  }, []);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setOpen(false);
      setStep(1); // reset step biar kalau dibuka lagi mulai dari awal
    }
  };

  const steps = [
    {
      title: "Welcome, Bro/Sis!",
      description:
        "Sorry, kalau My Web ini tampilannya alakadarnya saja. Tapi Kamu bisa klik next untuk melihat info kelanjutannya.",
      icon: "👋",
    },
    {
      title: "Kenalan Dulu, Yuk!",
      instagram: "https://www.instagram.com/m.iqbaaal_3/",
      facebook: "https://www.facebook.com/INIAKUNABAIDEH.TQ",
      description:
        "Kamu sudah di bagian info ke 2, maka dari itu kamu boleh(sunnah) saja follow My sosmed untuk kenal lebih dekat dengan Sya...:",
      icon: "🚨",
    },
    {
      title: "Let's Collaborate!",
      description:
        "''Senjata yang paling ampuh yaitu benda yang sedang Anda pegang saat ini.'' (MochIqbal - Founder's Groups)",
      icon: "🚀",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] border-border/40 p-0 overflow-hidden rounded-none">
        <div className="relative p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex justify-center">
                <span className="text-6xl">
                  {steps[step - 1].icon}
                </span>
              </div>

              <DialogHeader>
                <DialogTitle className="text-2xl font-sans tracking-tightest uppercase text-center">
                  {steps[step - 1].title}
                </DialogTitle>

                <DialogDescription className="text-center text-muted-foreground leading-relaxed pt-4">
                  {steps[step - 1].description}
                </DialogDescription>
              </DialogHeader>

              {/* SOCIAL MEDIA BUTTON */}
              {(steps[step - 1].instagram || steps[step - 1].facebook) && (
                <div className="flex flex-col gap-3 pt-2">

                  {/* INSTAGRAM */}
                  {steps[step - 1].instagram && (
                    <a
                      href={steps[step - 1].instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center px-4 py-2 border border-white/20 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Instagram - (@m.iqbaaal_3)
                    </a>
                  )}

                  {/* FACEBOOK */}
                  {steps[step - 1].facebook && (
                    <a
                      href={steps[step - 1].facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center px-4 py-2 border border-white/20 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Facebook - (Baal Iqq)
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* STEP INDICATOR */}
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 w-8 transition-all ${
                  s === step ? "bg-primary" : "bg-border/40"
                }`}
              />
            ))}
          </div>
        </div>

        <DialogFooter className="p-4 bg-muted/30 border-t border-border/10 sm:justify-center">
          <Button
            onClick={nextStep}
            className="w-full font-mono uppercase tracking-widest rounded-none h-12"
          >
            {step === 3 ? "Mulai Eksplorasi" : "Next"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}