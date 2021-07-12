import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [modeBoolean, setMode] = useState(true);

  useEffect(() => {
    async function loadMode() {
      const modoAnterior = await AsyncStorage.getItem("@mode")
      if (modoAnterior === "darknessOn") {
        setMode(true)
      }else if(modoAnterior === "lightOn") {
        setMode(false)
      }
    }
    loadMode()
  }, [])

  const setModeBoolean = () => {
    setMode(!modeBoolean)
    if(modeBoolean===false){
      const darknessOn = "darknessOn"
      AsyncStorage.setItem("@mode", darknessOn)
    } else if (modeBoolean===true){
      const lightOn = "lightOn"
      AsyncStorage.setItem("@mode", lightOn)
    }
  }
  // AsyncStorage.clear().then(()=> {
  //   setToken()
  // })
  return (
    <ModeContext.Provider value={{ modeBoolean, setModeBoolean}}>
      {children}
    </ModeContext.Provider>
  )
};