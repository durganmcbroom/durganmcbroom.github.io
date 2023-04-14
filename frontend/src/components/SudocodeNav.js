import {useTheme} from "@mui/material/styles";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useMediaQuery} from "@mui/material";

function CodeSpan(props) {
    return <span style={{
        fontFamily: "Courier New",
        fontWeight: 600,
        color: props.color
    }}>
        {props.value}
    </span>
}

function SudocodeNav(props) {
    let theme = useTheme()
    let rust = theme.palette.code.rust

    return (
        <div>
            <CodeSpan color={rust.keyword} value="let&ensp;"/>
            <CodeSpan color={rust.variable} value="project"/>
            <CodeSpan color={rust.text} value="&ensp;=&ensp;"/>
            <CodeSpan color={rust.fnCall} value="get_project();"/>
            <br/>
            <CodeSpan color={rust.keyword} value="let&ensp;"/>
            <CodeSpan color={rust.variable} value="desc"/>
            <CodeSpan color={rust.text} value="&ensp;=&ensp;"/>
            <CodeSpan color={rust.keyword} value="match&ensp;"/>
            <CodeSpan color={rust.text} value="project&ensp;{"/>
            <br/>
            {props.children}
            <CodeSpan color={rust.text} value="};"/>
        </div>
    )
}

export function SudocodeNavLink({to, name, descriptor}) {
    let theme = useTheme()
    let rust = theme.palette.code.rust
    let [hover, setHover] = useState(false)

    const margin = useMediaQuery(theme.breakpoints.down("md")) ? "20px 0" : "8px 0"

    return (<div style={{margin: margin}}>
            <Link to={to} style={{
                margin: "0 20px",
                textDecorationLine: "none",
                borderBottom: "1px solid " + (hover ?  theme.palette.text.hover : theme.palette.text.primary)
            }} onMouseEnter={() => {
                setHover(true)
            }} onMouseLeave={() => {
                setHover(false)
            }}>
                <CodeSpan
                    value={name + "(link) =>"}
                    color={rust.text}
                />
                <span>&ensp;</span>
                <CodeSpan
                    value={"format!"}
                    color={rust.macro}
                />
                <CodeSpan
                    value={"("}
                    color={rust.text}
                />
                <CodeSpan
                    value={"\"" + descriptor + "\""}
                    color={rust.string}
                />
                <CodeSpan
                    value={", link),"}
                    color={rust.text}
                />
            </Link>
        </div>
    )
}

export default SudocodeNav