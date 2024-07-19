import HeroWeb from "../components/HeroWeb";
import NavBar from "../components/NavBar";
import styles from "./WebPortfolio.module.css";

import githubIcon from "../assets/icons/github.svg"
import SocialLinks from "../components/SocialLinks";

export default function WebPortfolio({ }) {
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
            <p className={styles["bio"]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore molestiae blanditiis saepe impedit, ut soluta doloremque
                ipsam excepturi voluptas, autem obcaecati veniam consectetur. 
                Natus nobis libero debitis commodi voluptatum temporibus.
            </p>
            <div id="work" className={styles["work-header"]}>
                <h2 className={styles["work-title"]}>
                    <span>My</span>
                    <span>Work</span>
                </h2>
            </div>
            <div id="skills" className={styles["skills-header"]}>
                <h2 className={styles["skills-title"]}>
                    <span>My</span>
                    <span>Skills</span>
                </h2>
            </div>
        </>
    )
}