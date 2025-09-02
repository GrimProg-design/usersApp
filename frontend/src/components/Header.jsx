import "../style/header.css";
import { useState } from "react";
import Buttons from "./headerComponents/Buttons";
import User from "../assets/user.png";
import Cross from "../assets/cross.png";

export default function Header() {
  const [isActive, setIsActive] = useState("home");
  const [open, setOpen] = useState(false);

  function handleClick(page) {
    setIsActive(page);
  }

  function handleUser() {
    setOpen(!open);
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
        <div className={open ? "user-wrapper-open" : "user-wrapper"}>
          <div className="photo-wrapper">
            <img
              src={!open ? User : Cross}
              alt="user accaunt"
              onClick={handleUser}
            />
          </div>

          {open && (
            <div className="user-popup">
              <input type="text" placeholder="Enter your name" />
              <input type="password" placeholder="Enter your password" />
              <div className="for-button">
                <button type="submit">Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
