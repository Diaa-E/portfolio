import AboutWeb from "../components/AboutWeb";
import NavBar from "../components/NavBar";
import styles from "./WebPortfolio.module.css";

import { webProjects } from "../data/webProjects";
import WebProjectItem from "../components/WebProjectItem";
import { useEffect, useRef, useState } from "react";

export default function WebPortfolio({ }) {

    const [currentSection, setCurrentSection] = useState();

    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            
            // This needs to be in the same order as in the document from top to bottom
            const sections = [
                aboutRef.current,
                workRef.current,
                skillsRef.current,
            ];

            //Section does not need to be at the very top to be highlighted
            const sectionBuffer = window.innerHeight / 3;

            //soluition stolen from https://codepen.io/stepfray/pen/xxzJrYR
            //Similar concept to mine but much simpler
            for (const section of sections)
            {
                const scrolltDistance = scrollY;
                const sectionTop = section.offsetTop;

                if(scrolltDistance >= sectionTop - sectionBuffer)
                {
                    setCurrentSection(section.id);
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
                <AboutWeb />
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
                            <WebProjectItem
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