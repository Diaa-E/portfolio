import { useRouteError, Link } from "react-router-dom";

export default function Error({ })
{
    const error = useRouteError();
    console.error(`${error.status}: ${error.statusText}`);
    
    return (
        <>
            <h1>Error</h1>
            <h2>{error.status}: {error.statusText}</h2>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
            </ul>
        </>
    )
}