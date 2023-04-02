import { useEffect, useState } from "react";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";

function App() {
  const [preloaded, setPreloaded] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if(!preloaded){window.addEventListener("load", function () {
      setPreloaded(true);
      document.body.classList.add("loaded");
    });}
  }, [preloaded]);

  const toggleNavbar = () => {
    setIsNavOpen((isNavOpen) => !isNavOpen);
  };

  return (
    <div className="App">
      {/* PreLoader */}
      {/* <Preloader loaded={preloaded} /> */}

      {/* TOP BAR  */}
      <TopBar />

      {/* HEADER */}
      <Header toggleNav={toggleNavbar} isNavOpen={isNavOpen} />
      
      {/* PAGES */}

      <Home />
    </div>
  );
}

export default App;
