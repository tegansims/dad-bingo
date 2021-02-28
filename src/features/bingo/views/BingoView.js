import React, { useState, useEffect } from "react";
import BingoCard from "../components/BingoCard";
import Welcome from "../components/Welcome";

const BingoView = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 1500);
  }, [setShowWelcome]);

  if (showWelcome) return <Welcome setShowWelcome={setShowWelcome}/>;
  return <BingoCard />;
};

export default BingoView;
