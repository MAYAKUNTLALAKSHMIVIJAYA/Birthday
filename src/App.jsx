import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarryBackground from './components/StarryBackground';
import CustomCursor from './components/CustomCursor';
import AudioPlayer from './components/AudioPlayer';
import Navbar from './components/Navbar';

// Sections
import Screen1Welcome from './sections/Screen1Welcome';
import Screen2Envelope from './sections/Screen2Envelope';
import Screen3MemoryGallery from './sections/Screen3MemoryGallery';
import Screen4VideoMemories from './sections/Screen4VideoMemories';
import Screen5OurJourney from './sections/Screen5OurJourney';
import Screen6SpecialMessage from './sections/Screen6SpecialMessage';
import Screen7BirthdaySurprise from './sections/Screen7BirthdaySurprise';
import Screen8FinalSurprise from './sections/Screen8FinalSurprise';

export default function App() {
  const [activeScreen, setActiveScreen] = useState(1);

  // Scroll to top automatically whenever activeScreen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeScreen]);

  // Support Arrow navigation for convenience
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && activeScreen < 8) {
        setActiveScreen((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && activeScreen > 1) {
        setActiveScreen((prev) => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeScreen]);

  const handleNextScreen = () => {
    if (activeScreen < 8) {
      setActiveScreen((prev) => prev + 1);
    }
  };

  const handleReplay = () => {
    setActiveScreen(1);
  };

  // Screen transition animations
  const pageVariants = {
    initial: { opacity: 0, y: 24, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -24, scale: 0.98, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  return (
    <div className="relative min-h-screen bg-midnight-950 text-slate-100 overflow-x-hidden">
      {/* 1. Custom Interactive Desktop Sparkle Cursor */}
      <CustomCursor />

      {/* 2. Persistent Dynamic Starry Canvas & Nebulas */}
      <StarryBackground />

      {/* 3. Top Floating Navigation & Progress */}
      <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {/* 4. Audio & Sound FX Controls */}
      <AudioPlayer />

      {/* 5. Main Cinematic Storyboard Screens */}
      <main className="relative z-10 w-full min-h-screen">
        <AnimatePresence mode="wait">
          {activeScreen === 1 && (
            <motion.section
              key="screen-1"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              <Screen1Welcome onNext={handleNextScreen} />
            </motion.section>
          )}

          {activeScreen === 2 && (
            <motion.section
              key="screen-2"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              <Screen2Envelope onNext={handleNextScreen} />
            </motion.section>
          )}

          {activeScreen === 3 && (
            <motion.section
              key="screen-3"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              <Screen3MemoryGallery onNext={handleNextScreen} />
            </motion.section>
          )}

          {activeScreen === 4 && (
            <motion.section
              key="screen-4"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              <Screen4VideoMemories onNext={handleNextScreen} />
            </motion.section>
          )}

          {activeScreen === 5 && (
            <motion.section
              key="screen-5"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              <Screen5OurJourney onNext={handleNextScreen} />
            </motion.section>
          )}

          {activeScreen === 6 && (
            <motion.section
              key="screen-6"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              <Screen6SpecialMessage onNext={handleNextScreen} />
            </motion.section>
          )}

          {activeScreen === 7 && (
            <motion.section
              key="screen-7"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              <Screen7BirthdaySurprise onNext={handleNextScreen} />
            </motion.section>
          )}

          {activeScreen === 8 && (
            <motion.section
              key="screen-8"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-screen"
            >
              <Screen8FinalSurprise onReplay={handleReplay} />
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
