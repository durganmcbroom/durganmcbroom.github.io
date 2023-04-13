import baseline from "./baseline";
import {createTheme} from "@mui/material/styles";
import {deepmerge} from "@mui/utils";

const theme = createTheme(deepmerge(baseline,{
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
        },
        text: {
            primary: "rgba(0,0,0,0.8)",
            hover: "rgba(69,224,204,0.9)"
        },
        background: {
            paper: 'rgb(248,248,248)',
            default: 'white',
        },
        divider: "#eee",
        h1: {
            primary: "rgba(0,0,0,0.8)"
        },
        code: {
            rust: {
                keyword: "#2C43B1",
                macro: "#E29782",
                string: "#137C1E",
                fnCall: "#406E82",
                variable: "#A5A5A5",
                text: "#252525"
            }
        }
    },
}))
export default theme