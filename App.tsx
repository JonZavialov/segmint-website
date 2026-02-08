import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Primitives from './components/Primitives';
import Architecture from './components/Architecture';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      {/* Background Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-40"></div>
      
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-x border-border-dark min-h-screen bg-[#0A0A0A]">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Primitives />
          <Architecture />
          <Roadmap />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;