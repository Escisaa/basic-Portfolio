import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Tech from "./components/tech";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";

export default function App() {
  return (
    <div className="overflow-hidden text-stone-300 antialiased">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
