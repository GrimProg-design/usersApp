import "../style/header.css";
import { useState } from "react";
import Buttons from "./headerComponents/Buttons";

export default function Header() {
  const [isActive, setIsActive] = useState("home");

  function handleClick(page) {
    setIsActive(page);
  }

  return (
    <div className="header-wrapper">
      <h2>My Web-Site</h2>
      <nav>
        <Buttons
          value="Home"
          active={isActive === "home"}
          path="/home"
          onClick={() => handleClick("home")}
        />
        <Buttons
          value="More"
          active={isActive === "more"}
          path="/more"
          onClick={() => handleClick("more")}
        />
      </nav>
    </div>
  );
}
