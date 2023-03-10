import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  // links is an array in the data page
  // For Page check the data
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    //  the link likely refers to the text label of the link that was clicked to trigger the opening of the submenu,
    // In summary, the text argument is used to identify the specific link that was clicked, while the coordinates argument is used to position the submenu relative to that link.
    // In the context of the code snippet provided, the coordinates argument
    // passed to the openSubmenu function likely refers to the position of the
    // link that was clicked to trigger the opening of a submenu.
    //  By passing these coordinates to the function, it can be used to position
    // the submenu in relation to the link that was clicked, ensuring that the
    // submenu appears in the correct location on the screen.
    const page = sublinks.find((link) => link.page === text);
    // The function uses the find method to search the sublinks array for an object
    // where the page property matches the text argument passed to the function.
    setPage(page);
    // If a matching object is found, the function then sets the page state to the matching object,
    // the location state to the coordinates argument passed to the function, and sets the isSubmenuOpen state to true.
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSidebar,
        openSubmenu,
        closeSubmenu,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
