import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    // to get the text in the button
    // e.target property of the event object refers to the specific element on which the event occurred.
    const temptBtn = e.target.getBoundingClientRect();
    // to get the location
    // By calling getBoundingClientRect() on e.target, you can retrieve an object that contains properties such as x, y, width, and height.
    // These properties represent the coordinates and size of the element relative to the viewport, which is the visible area of the web page.
    const center = (temptBtn.left + temptBtn.right) / 2;
    // the left and right is same as the bottom from the  console.log
    // it will give you center of the button to the coordinates
    const bottom = temptBtn.bottom - 3;
    // the 3 is pixels
    openSubmenu(page, { center, bottom });
    // by passing it to the openSubmenu it can be used to position the submenu on the screen in relation to the button or link that was clicked,
    // ensuring that the submenu appears in the correct location on the screen.
  };

  // when you move the mouse from the navbar the hovering will not show
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      // The exclamation mark ! at the beginning of the line is a logical NOT
      // operator that negates the result of the expression that follows it.
      // The expression inside the parentheses
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
