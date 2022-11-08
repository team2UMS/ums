import { useState, createContext, useContext } from "react"
const GlobalContext = createContext(null);
export const GlobalState = props => {
  const [globalState, setGlobalState] = useState({});
  const updateGlobalState = (key, newValue) => {
    setGlobalState(oldState => {
      if (oldState[key] !== newValue) {
        const newState = { ...oldState };
        newState[key] = newValue;
        return newState;
      } else {
        return oldState;
      }
    });
  };

  return (
    <GlobalContext.Provider value={[globalState, updateGlobalState]}>{props.children}</GlobalContext.Provider>
  )
};
export const useGlobalState = () => useContext(GlobalContext);
