import { useState, useEffect } from "react";

interface SimpleTypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

export function SimpleTypewriter({
  text,
  speed = 100,
  className = "",
  showCursor = true,
}: SimpleTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse" />
      )}
    </span>
  );
}

interface TypewriterWordsProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  loop?: boolean;
}

export function TypewriterWords({
  words,
  className = "",
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 2000,
  loop = true,
}: TypewriterWordsProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentWord = words[currentWordIndex];

        if (!isDeleting && !isPaused) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.substring(0, currentText.length + 1));
          } else {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, delaySpeed);
          }
        } else if (isDeleting && !isPaused) {
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            if (loop) {
              setCurrentWordIndex((prev) => (prev + 1) % words.length);
            } else if (currentWordIndex < words.length - 1) {
              setCurrentWordIndex((prev) => prev + 1);
            }
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentWordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    loop,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse" />
    </span>
  );
}
