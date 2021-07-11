import React,{ createContext, useState } from "react";

export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [modeBoolean, setModeBoolean] = useState(false);

  return (
    <ModeContext.Provider value={{ modeBoolean, setModeBoolean }}>
      {children}
    </ModeContext.Provider>
  )};