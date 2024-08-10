import styles from "./WebWork.module.css";

import { webProjects } from "../data/webProjects";
import WebProjectItem from "./WebProjectItem";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { generateNeonTextActivator } from "../utils/neonTextUtils";

export default function WebWork()
{
    const neon1Ref = useRef(null);
    const neon2Ref = useRef(null);

    useIntersectionObserver(
        [
            neon1Ref,
            neon2Ref
        ],
        generateNeonTextActivator(styles["active"]),
        () => {
            neon1Ref.current.classList.add(styles["active"]);
            neon2Ref.current.classList.add(styles["active"]);
        }
    )

    return (
        <>
            <div className={styles["work-header"]}>
                <h2 className={styles["work-title"]}>
                    <span
                        className={styles["neon-one"]}
                        ref={neon1Ref}
                        style={{
                            "--off": "var(--neon-yellow-off)",
                            "--on": `var(--neon-yellow)`,
                            "--glow": "var(--glow-yellow)",
                            "--backlight": "var(--backlight-yellow)",
                            "--delay": "1s",
                            "--count": "4"
                        }}
                    >My</span>
                    <span
                        className={styles["neon-two"]}
                        ref={neon2Ref}
                        style={{
                            "--off": "var(--neon-pink-off)",
                            "--on": `var(--neon-pink)`,
                            "--glow": "var(--glow-pink)",
                            "--backlight": "var(--backlight-pink)",
                            "--delay": ".5s",
                            "--count": "2"
                        }}
                    >Work</span>
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
                            color={project.color}
                        />
                    )
                })
            }
            </ul>
        </>
    )
}