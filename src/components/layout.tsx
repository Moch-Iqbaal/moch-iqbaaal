import React from "react";
import { motion } from "motion/react";
import { Navbar } from "./navbar";
import PencilCursor from "./PencilCursor";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pt-32 pb-20 px-6 md:px-12 max-w-4xl"
      >
        {children}
      </motion.main>
      <PencilCursor />
      
      {/* Subtle Grid Background - Inspired by Technical/Hardware recipe */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
}
