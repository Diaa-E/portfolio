import HeroWeb from "../components/HeroWeb";
import NavBar from "../components/NavBar";
import styles from "./WebPortfolio.module.css";

import githubIcon from "../assets/icons/github.svg"
import SocialLinks from "../components/SocialLinks";

export default function WebPortfolio({ })
{
    return (
        <>
            <NavBar
                scrollAnchors={[
                    {
                        to: "#about",
                        text: "About Me"
                    },
                    {
                        to: "#work",
                        text: "My Work"
                    },
                    {
                        to: "#skills",
                        text: "My Skills"
                    }
                ]}
            />
            <HeroWeb />
            <SocialLinks
                socialLinks={[
                    {
                        name: "Github",
                        to: "https://github.com",
                        icon: githubIcon
                    },
                    {
                        name: "Github",
                        to: "https://github.com",
                        icon: githubIcon
                    }
                ]}
            />
        </>
    )
}