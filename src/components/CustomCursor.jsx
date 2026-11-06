import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Detect touch-only device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Central pinpoint glowing star */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-gold-300 shadow-[0_0_12px_#fbbf24]"
        style={{
          width: isClicking ? 12 : isPointer ? 8 : 6,
          height: isClicking ? 12 : isPointer ? 8 : 6,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: position.x,
          y: position.y,
          scale: isClicking ? 0.7 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.1,
        }}
      />

      {/* Trailing smooth magnetic aura ring */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-40 rounded-full border transition-colors duration-300 ${
          isPointer
            ? 'border-gold-400 bg-gold-400/10 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
            : 'border-lavender-400/50 bg-lavender-500/5'
        }`}
        style={{
          width: isPointer ? 44 : 28,
          height: isPointer ? 44 : 28,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: position.x,
          y: position.y,
          scale: isClicking ? 1.4 : isPointer ? 1.2 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250,
          mass: 0.25,
        }}
      />
    </>
  );
}
