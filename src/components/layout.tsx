import React from "react";
import { motion } from "motion/react";
import { Navbar } from "./navbar";
import PencilCursor from "./PencilCursor";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground">
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
    </div>
  );
}