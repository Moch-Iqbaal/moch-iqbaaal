/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { GravityStarsBackground } from "./components/animate-ui/components/backgrounds/gravity-stars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Collaborate from "./pages/collaborate";
import Contacts from "./pages/contacts";

export default function App() {
  return (
    <>
    <GravityStarsBackground className="fixed inset-0 -z-10" />

      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/collaborate" element={<Collaborate />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}
