import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers/reducer";

export const initialState = {
  theme: false,
  favs: JSON.parse(localStorage.getItem('favs')) || [],
}

export const DentistStates = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs]) 

  return (
    <DentistStates.Provider value={{state, dispatch}}>
      {children}
    </DentistStates.Provider>
  );
};
export default Context
