/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/layout";
import { WelcomeModal } from "./components/welcome-modal";
import Home from "./pages/home";
import About from "./pages/about";
import Collaborate from "./pages/collaborate";
import Contacts from "./pages/contacts";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Router>
        <Layout>
          <WelcomeModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
