import { useState, useEffect } from "react";
import { motion } from "motion/react";
function FloaterIcon({ currentSection }) {
  const [frame, setFrame] = useState(0);
  const floaters = {
    About: {
      frames: ["wave1-floater.png", "wave2-floater.png"],
      animationStyle: "wave",
    },
    Experience: {
      frames: ["experince.png"],
    },
    Education: {
      frames: ["graduation.png"],
    },
    Projects: {
      frames: ["waving-engineer1.png", "waving-engineer2.png"],
      animationStyle: "wave",
    },
    TechStack: {
      frames: ["science1.png", "science2.png", "science3.png"],
      animationStyle: "alternate",
    },
  };
  const currentFloater = floaters[currentSection];
  const maxFrames = currentFloater.frames.length;

  useEffect(() => {
    const interval = setInterval(
      () => {
        setFrame((prev) =>
          prev === maxFrames - 1 ? 0 : Math.min(prev + 1, maxFrames - 1),
        );
      },
      currentFloater.animationStyle === "alternate" ? 500 : 200,
    );

    return () => clearInterval(interval);
  }, [maxFrames, currentFloater]);
  return (
    <div className="flex w-full h-100 items-start justify-center">
      <motion.img
        key={
          currentFloater.animationStyle === "alternate"
            ? currentFloater.frames[Math.min(frame, maxFrames - 1)]
            : currentSection
        }
        src={currentFloater.frames[Math.min(frame, maxFrames - 1)]}
        className="w-[230.4px] h-[153.6px]"
        style={{ imageRendering: "pixelated" }}
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}

export default FloaterIcon;
