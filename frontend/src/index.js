import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./routes/Home";
import CIGames from "./routes/CIGames";
import light from "./theme/light";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline, useMediaQuery} from "@mui/material";
import dark from "./theme/dark";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/commandline-games",
        element: <CIGames/>
    },
])

export const SetThemeContext = React.createContext((theme) => {})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>
);

function Main() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [theme, setTheme] = useState(prefersDarkMode ? dark : light);
    return (
        <SetThemeContext.Provider value={(thisTheme) => {
            setTheme(thisTheme)
        }}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </SetThemeContext.Provider>
    )
}


