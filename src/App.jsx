import "./App.css";
import React from "react";
import Routes from "./routes";
import { useChangeTheme } from "./theme/hook";
import { createContext } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, perssistor } from "./redux/store";
export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: (value) => {},
});
function App() {
  const [theme, setTheme] = useChangeTheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={perssistor}>
        <>
          <ThemeContext.Provider
            value={{
              theme: theme,
              toggleTheme: setTheme,
            }}
          >
            <div className={`${theme == "light" ? "bgLight" : "bgDark"}`}>
              <div className="app">
                <Routes />
              </div>
            </div>
          </ThemeContext.Provider>
        </>
      </PersistGate>
    </Provider>
  );
}

export default App;
