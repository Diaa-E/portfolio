import { Link } from "react-router-dom";

export default function NavBar({ scrollAnchors = [{to: "#root", text: "root"}] })
{
    return (
        <nav>
            <ul>
            {
                scrollAnchors.map(anchor => (
                    <li key={anchor.to}>
                        <Link to={anchor.to}>{anchor.text}</Link>
                    </li>
                ))
            }
            </ul>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
            </ul>
        </nav>
    )
}