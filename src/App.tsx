/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/layout";
import Home from "./pages/home";

const GravityStarsBackground = lazy(() =>
  import("./components/animate-ui/components/backgrounds/gravity-stars").then(
    (mod) => ({ default: mod.GravityStarsBackground }),
  ),
);
const About = lazy(() => import("./pages/about"));
const Collaborate = lazy(() => import("./pages/collaborate"));
const Contacts = lazy(() => import("./pages/contacts"));

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GravityStarsBackground className="fixed inset-0 -z-10" />
      </Suspense>

      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <Router>
          <Layout>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/collaborate" element={<Collaborate />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}
