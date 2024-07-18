import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar({ scrollAnchors = [{to: "#root", text: "root"}] })
{
    return (
        <nav className={styles["nav-bar"]}>
            <ul className={styles["link-list"]}>
            {
                scrollAnchors.map(anchor => (
                    <li key={anchor.to}>
                        <Link to={anchor.to}>{anchor.text}</Link>
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