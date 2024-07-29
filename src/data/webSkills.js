import versionControlIcon from "../assets/icons/version_control.svg";
import frontEndIcon from "../assets/icons/front_end.svg";
import testingIcon from "../assets/icons/testing.svg";
import graphicDesignIcon from "../assets/icons/graphic_design.svg";
import uiDesignIcon from "../assets/icons/ui_design.svg";
import generateRandomNeonColor from "../utils/neonColorGenerator";

export const webSkills = [
    {
        name: "Front-End",
        icon: frontEndIcon,
        color: generateRandomNeonColor(),
        tools: [
            "HTML",
            "CSS",
            "CSS Modules",
            "JavaScript",
            "React JS",
            "React Router",
        ]
    },
    {
        name: "Testing",
        icon: testingIcon,
        color: generateRandomNeonColor(),
        tools: [
            "Vitest",
            "Jest",
            "React Testing Library"
        ]
    },
    {
        name: "Graphic Design",
        icon: graphicDesignIcon,
        color: generateRandomNeonColor(),
        tools: [
            "Photoshop",
            "Inkscape"
        ]
    },
    {
        name: "UI Design",
        icon: uiDesignIcon,
        color: generateRandomNeonColor(),
        tools: [
            "Photoshop"
        ]
    },
    {
        name: "Version Control",
        icon: versionControlIcon,
        color: generateRandomNeonColor(),
        tools: [
            "Git",
            "Github",
        ]
    }
]