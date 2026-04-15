import React from "react";
import background from "../assets/bg.jpg";

export default function BackgroundImage() {
  const style = {height: "100vh", width: "100%"};
  return (
    <div style={style} className="h-screen w-screen">
      <img className="h-full w-full" src={background} alt="background" />
    </div>
  );
}
