import Header from "../components/Header";
import React from "react";
import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {startPong} from "../static/js/Pong";
import pongImage from "../static/images/pong-background.png"
import tiImage from "../static/images/Ti84Pong.png"
import csnakepng from "../static/images/csnake.png";
import rustsnakepng from "../static/images/rustsnake.png"
import {useTheme} from "@mui/material/styles";
import {Link} from "react-router-dom";

export function CIGames() {
    let theme = useTheme()

    console.log(theme.breakpoints.down("md"))
    const small = useMediaQuery(theme.breakpoints.down("md"))

    return (<div>
        <Header/>
        <Container maxWidth={// sm: false,
            "md"
        } sx={{margin: "0 auto"}}>
            <Stack direction={{
                md: "column", lg: "row"
            }} sx={{margin: "30px 0"}}>
                <canvas
                    onClick={startPong}
                    id="gameCanvas"
                    style={{
                        width: "20vh",
                        height: "15vh",
                        backgroundImage: `url(${pongImage})`,
                        backgroundSize: "cover",
                        margin: (small ? "0 auto" : "0")
                    }}
                />
                <Typography variant="body1" sx={{margin: "20px"}}>
                    A common app I write to gain fluency in a language is Pong. As a 7th grader
                    this was one of the first frontend games I built. You can play the original version to
                    the right by clicking it and then controlling the left paddle with W or
                    S and the right paddle with Up Arrow and Down Arrow.
                    &ensp;<Link to={"https://github.com/durganmcbroom/PongJS"}>Code is here.</Link>
                </Typography>
            </Stack>
            <Stack direction={{
                md: "column", lg: "row"
            }} sx={{margin: "30px 0"}}>
                <Typography variant="body1" sx={{margin: "20px"}}>
                    Here is another Version of Pong, this time written in TI-Basic on a TI-84+CE calculator.
                    Unfortunately it is not playable online, however you can see the basic graphics to the
                    right.
                </Typography>
                <img
                    alt={"A graphing calculator running a pong program."}
                    src={tiImage}
                    style={{
                        width: "20vh",
                        height: "15vh",
                        margin: (small ? "0 auto" : "0")
                    }}
                />
            </Stack>
            <Stack direction={{
                md: "column", lg: "row"
            }} sx={{margin: "30px 0"}}>
                <img
                    alt={"A command line interface running a game of snake."}
                    src={csnakepng}
                    style={{
                        width: "20vh",
                        height: "15vh",
                        margin: (small ? "0 auto" : "0")
                    }}
                />
                <Typography variant="body1" sx={{margin: "20px"}}>
                    In 2021 I wanted to learn some C, so this was my first project ever in it. I used curses
                    for graphics but otherwise wrote it by hand. This was my first dive into lower level
                    programming and I had alot of fun with it.&ensp;
                    <Link to={"https://github.com/durganmcbroom/CSnakeGame"}>Code is here.</Link>
                </Typography>
            </Stack>
            <Stack direction={{
                md: "column", lg: "row"
            }} sx={{margin: "30px 0"}}>
                <Typography variant="body1" sx={{margin: "20px"}}>
                    The most recent language I've been learning is Rust. This is a rendition of Snake that I wrote
                    a couple months ago, I tried to embrace as much modularity as possible while writing this
                    and so while overcomplicated, was an extremely good introduction to Rust/Cargo.&ensp;
                    <Link to={"https://github.com/durganmcbroom/snake-rust"}>Code is here.</Link>
                </Typography>
                <img
                    alt={""}
                    src={rustsnakepng}
                    style={{
                        width: "20vh",
                        height: "15vh",
                        margin: (small ? "0 auto" : "0")
                    }}
                />
            </Stack>
        </Container>
    </div>)
}

export default CIGames