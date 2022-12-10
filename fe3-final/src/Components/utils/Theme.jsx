import {createContext, useReducer} from 'react';


const Theme = createContext();
const initialTheme = "light";

function reducer(state, action) {
    switch (action.type) {
      case "light":
        return action.payload;
      case "dark":
        return action.payload;
      default:
        throw new Error();
    }
  }

const ThemeProvider = ({children}) => {
    const [theme, setTheme]= useReducer(reducer, initialTheme);
    const data = {theme, setTheme};

    return <Theme.Provider value={data}>{children}</Theme.Provider>
}

export default Theme;
export {ThemeProvider};