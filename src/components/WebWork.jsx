import styles from "./WebWork.module.css";

import { webProjects } from "../data/webProjects";
import WebProjectItem from "./WebProjectItem";

export default function WebWork({ })
{
    return (
        <>
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
        </>
    )
}