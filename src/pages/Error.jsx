import styles from "./Error.module.css";

import { useRouteError, Link } from "react-router-dom";

export default function Error()
{
    const error = useRouteError();
    console.error(`${error.status}: ${error.statusText}`);
    
    return (
        <div className={styles["error-background"]}>
            <h1 className={styles["error-title"]}>Error</h1>
            <h2 className={styles["error-details"]}>{error.status}: {error.statusText}</h2>
            <ul className={styles["nav-list"]}>
                <li>
                    <Link className={styles["home-link"]} to={"/"}>Home</Link>
                </li>
            </ul>
        </div>
    )
}