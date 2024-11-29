import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isPageId, setPageId] = useState(null);
  const [isSublink, setSublink] = useState({});

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const getPageId = (id) => {
    setPageId(id);
  };

  const addSublink = (showSublinks) => {
    setSublink(showSublinks);
  };
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        getPageId,
        isPageId,
        setSublink,
        isSublink,
        addSublink,
        setPageId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
