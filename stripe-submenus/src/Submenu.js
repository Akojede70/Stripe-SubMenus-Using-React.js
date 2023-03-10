import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  // The useRef hook returns a mutable ref object that can be used to refer to a
  //  component or HTML element throughout the lifecycle of a React component.
  const [columns, setColumns] = useState("col-2");
  // adjusting for hover of the length and width in the navbar
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    // the center and bottom has been defined in the navbar
    submenu.style.left = `${center}px`;
    // the left; it is a JavaScript property used to get or set the horizontal position of an HTML element,
    //  with a position value of absolute, fixed, or relative,
    submenu.style.top = `${bottom}px`;
    // the top; it is a JavaScript property used to get or set the top position of an HTML element
    // with a position value of absolute, fixed, or relative.

    if (links.length === 3) {
      setColumns("col-3");
      // All the col-3 and col-4 has been adjusted in css
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      // check css for the style
      // adjusting for the container
      // for the hovering in the navbar.
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
