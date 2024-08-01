import AboutWeb from "../components/AboutWeb";
import NavBar from "../components/NavBar";
import styles from "./WebPortfolio.module.css";

import { useEffect, useRef, useState } from "react";
import WebWork from "../components/WebWork";
import WebSkills from "../components/WebSkills";

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
                <WebWork />
            </section>

            <section ref={skillsRef} id="skills">
                <WebSkills />
            </section>
        </>
    )
}