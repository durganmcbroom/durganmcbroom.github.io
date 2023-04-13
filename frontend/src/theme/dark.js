import {createTheme} from "@mui/material/styles";
import baseline from "./baseline";
import { deepmerge } from "@mui/utils";

const theme = createTheme(deepmerge(baseline,{
    palette: {
        mode: 'dark',
        primary: {
            main: '#3a3a3a',
        },
        text: {
            primary: "rgba(255,255,255,0.8)",
            hover: "rgba(69,224,204,0.9)"
        },
        background: {
            paper: 'rgb(248,248,248)',
            default: 'rgb(49,50,55)',
        },
        divider: "#eee",
        h1: {
            primary: "rgba(208,208,208,0.8)"
        },
        code: {
            rust: {
                keyword: "#c4886c",
                macro: "#4fa3d4",
                string: "#137C1E",
                fnCall: "#b3b4ba",
                variable: "#A5A5A5",
                text: "#aeb0b5"
            }
        }
    },
}))

export default theme