import { Suspense, lazy } from "react";
import { Navbar } from "./navbar";

const PencilCursor = lazy(() => import("./PencilCursor"));

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-500 ease-out [animation-fill-mode:both]">
        {children}
      </main>
      <Suspense fallback={null}>
        <PencilCursor />
      </Suspense>
    </div>
  );
}