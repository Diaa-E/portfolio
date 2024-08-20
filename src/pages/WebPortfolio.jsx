import AboutWeb from "../components/AboutWeb";
import NavBar from "../components/NavBar";
import styles from "./WebPortfolio.module.css";

import { useEffect, useRef, useState } from "react";
import WebWork from "../components/WebWork";
import WebSkills from "../components/WebSkills";
import Contact from "../components/Contact";

export default function WebPortfolio() {

    const [currentSection, setCurrentSection] = useState();

    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {

        function handleScroll()
        {
            // This needs to be in the same order as in the document from top to bottom
            const sections = [
                aboutRef.current,
                workRef.current,
                skillsRef.current,
                contactRef.current
            ];

            //Section does not need to be at the very top to be highlighted
            const sectionBuffer = window.innerHeight / 3;

            //solution stolen from https://codepen.io/stepfray/pen/xxzJrYR
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
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

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
                    },
                    {
                        to: "#contact",
                        text: "Contact Me"
                    }
                ]}
                activeAnchor={currentSection}
            />

            <section ref={aboutRef} id="about">
                <AboutWeb />
            </section>

            <section ref={workRef} id="work">
                <WebWork />
            </section>

            <section ref={skillsRef} id="skills">
                <WebSkills />
            </section>

            <section ref={contactRef} id="contact">
                <Contact />
            </section>

            <footer className={styles["web-footer"]}>
                <h3>
                    <span className={styles["year"]}>©️ {new Date().getFullYear()}</span>
                    <span className={styles["copyright"]}> Diaa E.</span>
                </h3>
            </footer>
        </>
    )
}