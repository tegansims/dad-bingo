import React from "react";

const BaseLayout = ({ bg = "red", children, ...props }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#3D4E57"
    }}
  >
    <div
      style={{
        backgroundColor: bg,
        width: 1024,
      }}
    >
      {children}
    </div>
  </div>
);

export default BaseLayout;
