import { motion } from "motion/react";
import { useEffect, useState } from "react";

function WelcomeScreen() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev === 0 ? 1 : 0));
    }, 200);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <div className="grid">
        <div className="[grid-area:1/1] flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 5,
              delay: 3,
              times: [0, 0.33, 0.8, 1],
            }}
          >
            <img
              src={frame === 0 ? "wave1.png" : "wave2.png"}
              className="w-[460.8px] h-[307.2px]"
              style={{ imageRendering: "pixelated" }}
            />
          </motion.div>
        </div>
        <div className="w-full  h-[100vh] grid grid-cols-1 grid-rows-2 [grid-area:1/1]">
          <div className=" overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.div
                className="flex justify-center"
                initial={{ y: 0 }}
                animate={{ y: 2000 }}
                transition={{ duration: 6, delay: 2 }}
              >
                <img
                  src="falling-avatar.png"
                  className="w-[60px] md:w-[120px] h-[45px] md:h-[90px]"
                  style={{ imageRendering: "pixelated" }}
                ></img>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3,
              delay: 0.8,
              times: [0, 0.33, 0.8, 1],
            }}
            className="flex justify-center"
          >
            <h1 className=" font-bold text-2xl md:text-8xl"> Welcome</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
