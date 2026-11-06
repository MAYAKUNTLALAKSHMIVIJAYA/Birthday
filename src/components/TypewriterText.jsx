import React, { useState, useEffect } from 'react';

export default function TypewriterText({
  text,
  speed = 28,
  delay = 300,
  className = '',
  cursorClassName = 'text-gold-400',
  onComplete,
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeoutId;
    let index = 0;
    setDisplayedText('');
    setIsDone(false);

    timeoutId = setTimeout(() => {
      setIsTyping(true);
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setIsDone(true);
          if (onComplete) onComplete();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  const handleSkip = () => {
    setDisplayedText(text);
    setIsTyping(false);
    setIsDone(true);
    if (onComplete) onComplete();
  };

  return (
    <div className={`relative ${className}`} onClick={handleSkip} title="Click to reveal all">
      <span>{displayedText}</span>
      {!isDone && (
        <span className={`inline-block animate-pulse font-mono ml-0.5 ${cursorClassName}`}>
          |
        </span>
      )}
    </div>
  );
}
