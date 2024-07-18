import NavBar from "../components/NavBar";
import styles from "./WebPortfolio.module.css";

export default function WebPortfolio({ })
{
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
            />
            <h1>Web</h1>
        </>
    )
}