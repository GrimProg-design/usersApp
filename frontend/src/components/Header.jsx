import "../style/header.css";
import { useState } from "react";
import Buttons from "./headerComponents/Buttons";
import User from "../assets/user.png";
import Cross from "../assets/cross.png";

export default function Header() {
  const [isActive, setIsActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(page) {
    setIsActive(page);
  }

  function handleUser() {
    setOpen(!open);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      if (!res.ok) {
        switch (res.status) {
          case 500:
            throw new Error(`Server doesnt work: ${res.status}`);
          case 404:
            throw new Error(`Page not found: ${res.status}`)
          default:
            throw new Error("Unknown error");
        }
      }

      const data = await res.json();
      console.log(data);
    } catch (err) {
      alert(`it seems we got some problem: ${err.message}`);
    }
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
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="for-button">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
