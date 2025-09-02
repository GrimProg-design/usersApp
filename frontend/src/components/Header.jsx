import "../style/header.css";
import { useState } from "react";
import Buttons from "./headerComponents/Buttons";
import User from "../assets/user.png";

export default function Header() {
  const [isActive, setIsActive] = useState("home");

  function handleClick(page) {
    setIsActive(page);
  }

  return (
    <div className="header-wrapper">
      <div className="name-wrapper">
        <h2>My Web-Site</h2>
      </div>
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
      <div className="section-for-user">
        <div className="user-wrapper">
          <img src={User} alt="user accaunt" />
        </div>
      </div>
    </div>
  );
}
