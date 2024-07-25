import HeroWeb from "../components/HeroWeb";
import NavBar from "../components/NavBar";
import styles from "./WebPortfolio.module.css";

import IconLink from "../components/IconLink";
import { webProjects } from "../data/webProjects";
import WebWorkItem from "../components/WebProjectItem";
import { socialLinks } from "../data/socialLinks";
import { useEffect, useRef, useState } from "react";

export default function WebPortfolio({ }) {

    const [currentSection, setCurrentSection] = useState();

    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            
            // This needs to be in the same order as in the document from top to bottom
            const refs = [
                aboutRef.current,
                workRef.current,
                skillsRef.current,
            ]

            let closest

            for (const ref of refs)
            {
                if (ref.getBoundingClientRect().top > 0)
                {
                    setCurrentSection(closest);
                    return;
                }
                else
                {
                    closest = ref.id;
                }
            }
        });

        return () => window.removeEventListener("scroll", window);

    }, []);

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
                activeAnchor={currentSection}
            />
            <section ref={aboutRef} id="about">
                <HeroWeb />
                <ul className={styles["social-links-wrapper"]}>
                {
                    socialLinks.web.map(link => {
                        return <li key={link.to}>
                            <IconLink icon={link.icon} name={link.name} to={link.to} textOnRight={true} color={link.color} />
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
            </section>

            <section ref={workRef} id="work">
                <div className={styles["work-header"]}>
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
            </section>

            <section ref={skillsRef} id="skills">
                <div className={styles["skills-header"]}>
                    <h2 className={styles["skills-title"]}>
                        <span>My</span>
                        <span>Skills</span>
                    </h2>
                </div>
            </section>
        </>
    )
}