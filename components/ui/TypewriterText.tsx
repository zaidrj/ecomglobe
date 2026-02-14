'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; // Typing speed in milliseconds
  deleteSpeed?: number; // Deleting speed in milliseconds
  pauseTime?: number; // Pause time after typing and deleting in milliseconds
  className?: string;
  highlightText?: string; // Text portion to highlight with different color
  highlightClassName?: string; // Class name for highlighted text
}

export default function TypewriterText({
  text,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = '',
  highlightText = '',
  highlightClassName = '',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setDisplayedText(text.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting, wait then start typing again
          setIsDeleting(false);
          setTimeout(() => {
            setCurrentIndex(0);
            setDisplayedText('');
          }, pauseTime);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, deleteSpeed, pauseTime]);

  // Split the displayed text to apply highlight
  const renderText = () => {
    if (!highlightText || !displayedText.includes(highlightText)) {
      return <>{displayedText}</>;
    }
    
    const highlightIndex = displayedText.indexOf(highlightText);
    const beforeHighlight = displayedText.slice(0, highlightIndex);
    const highlight = displayedText.slice(highlightIndex, highlightIndex + highlightText.length);
    const afterHighlight = displayedText.slice(highlightIndex + highlightText.length);
    
    return (
      <>
        {beforeHighlight}
        <span className={highlightClassName}>{highlight}</span>
        {afterHighlight}
      </>
    );
  };

  return (
    <span className={className}>
      {renderText()}
      {!isDeleting && currentIndex < text.length && (
        <span className="animate-pulse ml-1">|</span>
      )}
    </span>
  );
}

