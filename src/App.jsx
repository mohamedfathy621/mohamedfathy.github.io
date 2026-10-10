import MainPortifolio from "./screens/Main-Portifolio";
import WelcomeScreen from "./screens/Welcome-Screen";
import { useEffect, useState } from "react";
import useImagePreloader from "./screens/asset-loading-hook";
import { motion } from "motion/react";

const imagesToPreload = [
  "wave1.png",
  "wave2.png",
  "falling-avatar.png",
  "wave1-floater.png",
  "wave2-floater.png",
  "experince.png",
  "graduation.png",
  "waving-engineer1.png",
  "waving-engineer2.png",
  "science1.png",
  "science2.png",
  "science3.png",
];
function App() {
  const [mainDisplay, setMainDisplay] = useState(false);

  const imagesLoaded = useImagePreloader(imagesToPreload);
  useEffect(() => {
    if (imagesLoaded) {
      setTimeout(() => {
        setMainDisplay(true);
      }, 8000);
    }
  }, [imagesLoaded]);

  return (
    <div className="min-w-screen min-h-screen">
      {mainDisplay ? (
        <MainPortifolio></MainPortifolio>
      ) : !imagesLoaded ? (
        <div className="min-w-screen min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              delay: 1,
            }}
            className="flex justify-center"
          >
            <h1 className=" font-bold text-base  lg:text-8xl"> LOADING</h1>
          </motion.div>
        </div>
      ) : (
        <WelcomeScreen></WelcomeScreen>
      )}
    </div>
  );
}

export default App;
