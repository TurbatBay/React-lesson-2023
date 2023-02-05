import React, { createContext, useState } from "react";

export const SidebarContext = createContext({
  open: false,
  setOpen: () => {},
});

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
