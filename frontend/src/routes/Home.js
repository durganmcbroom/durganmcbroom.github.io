import React from "react";
import {Container, Paper, styled, Typography} from "@mui/material";
import Header from "../components/Header";
import ThemedTypography from "../components/ThemedTypography";
import SudocodeNav, {SudocodeNavLink} from "../components/SudocodeNav";

function Home() {
    return (
        <div>
            <Header/>
            <Container maxWidth="md" sx={{margin: "20px auto"}}>
                <Typography variant="body1">
                    Hey, I'm Durgan. Primarily, I'm a programmer and live for computer science/software design. As a hobbyist fullstack software
                    developer I work a lot on open sourced APIs and Frameworks, generally in or around the JVM
                    ecosystem. In my spare time I play the Alto Saxophone (Gigging around Seattle), am an avid
                    player of Ultimate (Frisbee), and hang out with my dog 🐕
                </Typography>
                <ThemedTypography fontSize={30} sx={{margin: "30px 0"}}>
                    My Projects:
                </ThemedTypography>
                <SudocodeNav>
                    <SudocodeNavLink
                        to={"https://github.com/yakclient"}
                        name={"YakClient"}
                        descriptor={"A Minecraft Modding platform: {}"}
                    />
                    <SudocodeNavLink
                        to={"https://github.com/durganmcbroom/durganmcbroom.github.io"}
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