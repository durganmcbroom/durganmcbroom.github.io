import React from "react";
import {Container, Paper, styled, Typography} from "@mui/material";
import Header from "../components/Header";
import ThemedTypography from "../components/ThemedTypography";
import SudocodeNav, {SudocodeNavLink} from "../components/SudocodeNav";

//
const Item = styled(Paper)(({theme}) => ({
    padding: "15px",
    textAlign: "center"
}));

// const ContactCard =

function Home() {

    return (
        <div>
            <Header/>
            <Container maxWidth="md" sx={{margin: "20px auto"}}>
                <Typography variant="body1">
                    Im a hobbyist fullstack, Kotlin, Java, Framework and Application developer. I love playing
                    Ultimate
                    (Frisbee), Ice Hockey, Jazz (Also sax), and playing with my dog 🐕!
                </Typography>

                <ThemedTypography variant={"h2"} fontSize={{
                    sml: 25,
                    md: 30,
                    lrg: 35,
                }} sx={{margin: "30px 0"}}>
                    My Projects:
                </ThemedTypography>
                <SudocodeNav>
                    <SudocodeNavLink
                        to={"https://github.com/yakclient"}
                        name={"YakClient"}
                        descriptor={"A Minecraft Modding platform: {}"}
                    />
                    <SudocodeNavLink
                        to={"https://github.com/durganmcbroom/mywebsite"}
                        name={"ThisWebsite"}
                        descriptor={"Its github: {}"}
                    />
                    <SudocodeNavLink
                        to={"https://github.com/orgs/QuestCraft-Network/repositories"}
                        name={"QuestCraft"}
                        descriptor={"A Minecraft server: {}"}
                    />
                    <SudocodeNavLink
                        to={"/commandline-games"}
                        name={"CommandLineGames"}
                        descriptor={"A tool i used to learn languages: {}"}
                    />
                </SudocodeNav>

            </Container>
        </div>)
}

export default Home