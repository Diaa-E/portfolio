import HeroWeb from "../components/HeroWeb";
import NavBar from "../components/NavBar";
import styles from "./WebPortfolio.module.css";

import githubIcon from "../assets/icons/github.svg"
import IconLink from "../components/IconLink";
import { webProjects } from "../data/webProjects";
import WebWorkItem from "../components/WebProjectItem";

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
            <ul className={styles["social-links-wrapper"]}>
            {
                [
                    {
                        name: "Github",
                        to: "https://github.com",
                        icon: githubIcon
                    },
                    {
                        name: "Github",
                        to: "https://githubdf.com",
                        icon: githubIcon
                    }
                ].map(link => {
                    return <li key={link.to}>
                        <IconLink icon={link.icon} name={link.name} to={link.to} textOnRight={true} />
                    </li>
                })
            }
            </ul>
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
            <ul className={styles["projects-list"]}>
            {
                webProjects.map(project => {
                    return (
                        <WebWorkItem
                            key={project.name}
                            name={project.name}
                            livePreview={project.livePreview}
                            source={project.source}
                            image={project.image}
                            description={project.description}
                        />
                    )
                })
            }
            </ul>
            <div id="skills" className={styles["skills-header"]}>
                <h2 className={styles["skills-title"]}>
                    <span>My</span>
                    <span>Skills</span>
                </h2>
            </div>
        </>
    )
}