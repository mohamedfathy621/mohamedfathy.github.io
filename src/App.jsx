import MainPortifolio from "./screens/Main-Portifolio";
import WelcomeScreen from "./screens/Welcome-Screen";
import { useEffect, useState } from "react";

function App() {
  const [mainDisplay, setMainDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMainDisplay(true);
    }, 8000);
  }, []);

  return (
    <div className="min-w-screen min-h-screen">
      {mainDisplay ? (
        <MainPortifolio></MainPortifolio>
      ) : (
        <WelcomeScreen></WelcomeScreen>
      )}
    </div>
  );
}

export default App;
