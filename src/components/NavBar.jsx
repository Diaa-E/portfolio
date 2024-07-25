import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar({ scrollAnchors = [{to: "#root", text: "root"}], activeAnchor })
{
    return (
        <nav className={styles["nav-bar"]}>
            <ul className={styles["link-list"]}>
            {
                scrollAnchors.map(anchor => (
                    <li key={anchor.to} >
                        <a
                            className={"#" + activeAnchor === anchor.to ? styles["active-section"] : ""}
                            href={anchor.to}
                        >{anchor.text}</a>
                    </li>
                ))
            }
            </ul>
            <ul className={styles["link-list"]}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
            </ul>
        </nav>
    )
}