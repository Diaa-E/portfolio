import AboutWeb from "../components/AboutWeb";
import NavBar from "../components/NavBar";
import styles from "./WebPortfolio.module.css";

import { useEffect, useRef, useState } from "react";
import WebWork from "../components/WebWork";
import WebSkills from "../components/WebSkills";
import Contact from "../components/Contact";
import useActiveSection from "../hooks/useActiveSection";

export default function WebPortfolio() {

    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    const currentSection = useActiveSection([
        aboutRef,
        workRef,
        skillsRef,
        contactRef
    ]);

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