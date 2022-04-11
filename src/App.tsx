import './App.css';
import React from 'react';
import Routes from './routes';
import { useChangeTheme } from './theme/hook'
import { createContext } from 'react';
export const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: (value:any) => { },
});
function App() {
    const [theme, setTheme] = useChangeTheme()

    return <ThemeContext.Provider value={
        {
            theme: theme,
            toggleTheme: setTheme,
        }
    }>
        <div className={`${theme == "light" ? "bgLight" : "bgDark"}`}>
            <div className="app">
                <Routes />
            </div>
        </div>
    </ThemeContext.Provider>;
}

export default App;