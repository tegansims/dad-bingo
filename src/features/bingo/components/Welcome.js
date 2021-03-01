import React from "react";
import BaseLayout from "../../../layouts/BaseLayout";

const Welcome = ({ setShowWelcome }) => (
  <BaseLayout bg="transparent">
    <h1
      style={{
        textAlign: "center",
        color: "white",
        visibility: "visible",
        opacity: 1,
        transition: "visibility 0s 2s, opacity 2s linear",
        cursor: "pointer",
      }}
      onClick={() => setShowWelcome(false)}
    >
      Welcome to Dad Bingo!
    </h1>
  </BaseLayout>
);

export default Welcome;
