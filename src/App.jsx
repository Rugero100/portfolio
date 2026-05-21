import { useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import FloatingIcons from "./components/FloatingIcons";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import { useTheme } from "./hooks/useTheme";
import { useActiveSection } from "./hooks/useActiveSection";
import { navLinks } from "./data/portfolioData";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark, toggleTheme } = useTheme();
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      {/* Loading screen on first visit */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Background effects */}
      <AnimatedBackground />
      <FloatingIcons />

      {/* Main content */}
      <div className={`relative min-h-screen ${isLoading ? "hidden" : ""}`}>
        <Navbar
          activeSection={activeSection}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        <Home />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
