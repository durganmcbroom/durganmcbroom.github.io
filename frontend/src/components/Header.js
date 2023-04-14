import React, {useState} from "react";
import {Divider, Stack, styled} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import {Link} from "react-router-dom";
import ThemedTypography from "./ThemedTypography";
import resume from "../static/Resume.pdf"
import {SetThemeContext} from "../index";

const StyledDivider = styled(Divider)(({theme}) => ({
    margin: "auto", padding: "10px", [theme.breakpoints.up("sm")]: {
        width: "50%"
    }, [theme.breakpoints.up("md")]: {
        width: "40%"
    }, [theme.breakpoints.up("lg")]: {
        width: "30%"
    }, color: theme.palette.divider
}));


function StyledLink(props) {
    const theme = useTheme()

    const [hover, setHover] = useState(false)

    const txtColor = hover ? theme.palette.text.hover : theme.palette.text.primary;

    const style = {
        textDecorationLine: "none", color: txtColor, borderBottom: "1px solid " + txtColor
    }
    return ((!props.useA) ? <Link
        to={props.to}
        style={style}
        onMouseEnter={() => {
            setHover(true)
        }}
        onMouseLeave={() => {
            setHover(false)
        }}
    >
        {props.children}
    </Link> : <a
        href={props.to}
        style={style}
        onMouseEnter={() => {
        setHover(true)
    }}
        onMouseLeave={() => {
        setHover(false)
    }}>{props.children}
    </a>)
}

function Header() {
    const theme = useTheme()
    const setTheme = React.useContext(SetThemeContext)

    return (<div>
        <ThemedTypography bolded align="center" variant="h1" fontSize={{
            sm: 35, md: 50, lg: 80,
        }} sx={{
            margin: "60px 0px 10px 0px",
            fontWeight: 500,
            color: theme.palette.h1.primary
        }}>Durgan McBroom</ThemedTypography>

        <Stack justifyContent="center"
               alignItems="center" spacing={{
            sm: 1, lg: 2
        }}>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem/>}
                spacing={2}
                align="center"
            >
                <StyledLink to={"/"}>Home</StyledLink>
                <StyledLink useA to={resume}>Resume</StyledLink>
            </Stack>
            <Stack
                direction="row"
                divider={<span>-</span>}
                spacing={2}>
                <StyledLink to={"https://github.com/durganmcbroom"}>Github</StyledLink>
                <StyledLink to={"https://www.linkedin.com/in/durganmcbroom/"}>Linked In</StyledLink>
                <StyledLink to={"mailto:durganmcbroom@gmail.com"}>Email</StyledLink>
            </Stack>
        </Stack>
        <StyledDivider/>
    </div>)
}

export default Header