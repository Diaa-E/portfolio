import styles from "./WebProjectItem.module.css";
import codeIcon from "../assets/icons/code.svg";
import previewIcon from "../assets/icons/preview.svg";
import IconLink from "./IconLink";
import PropTypes from "prop-types";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { generateNeonTextActivator, generateNeonTextInlineStyle } from "../utils/neonTextUtils";

export default function WebProjectItem({name, livePreview, source, image, description, color})
{
    const listItemRef = useRef(null);

    useIntersectionObserver(
        [
            listItemRef
        ],
        generateNeonTextActivator(styles["active"]),
        () => {
            listItemRef.current.classList.add(styles["active"])
        }
    )

    return (
        <li
            ref={listItemRef}
            key={name}
            className={styles["web-project-item"]}
            style={generateNeonTextInlineStyle(color, Math.random(), Math.floor(Math.random() * 3))}
        >
            <img src={image} alt={name} />
            <div className={styles["web-project-details"]}>
                <span>
                    <h3
                        className={styles["web-project-title"]}
                    >{name}</h3>
                    <p className={styles["web-project-description"]}>{description}</p>
                </span>
                <div className={styles["web-project-links"]}>
                {
                    source &&
                    <IconLink to={source} name={"Source"} icon={codeIcon} textOnRight={true} color={color} />
                }
                {
                    livePreview &&
                    <IconLink to={livePreview} name={"Live"} icon={previewIcon} textOnRight={false} color={color}/>
                }
                </div>
            </div>
            <div
                className={styles["web-project-neon-strip"]}
            ></div>
        </li>
    )
}

WebProjectItem.propTypes = {
    name: PropTypes.string.isRequired,
    livePreview: PropTypes.string,
    source: PropTypes.string,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}