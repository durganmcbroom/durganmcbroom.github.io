import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./routes/Home";
import CIGames from "./routes/CIGames";
import light from "./theme/light";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";


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
    const [theme, setTheme] = useState(light)

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

/**/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

