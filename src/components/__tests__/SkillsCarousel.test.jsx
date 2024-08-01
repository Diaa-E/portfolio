import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SkillsCarousel from "../SkillsCarousel";

describe("Skills Carousel Component", () => {

    const skills = [
        {
            name: "skill1",
            icon: "icon1",
            color: "color1",
            tools: [
                "tool1",
                "tool2",
                "tool3"
            ]
        },
        {
            name: "skill2",
            icon: "icon2",
            color: "color2",
            tools: [
                "tool5",
                "tool6",
            ]
        },
        {
            name: "skill3",
            icon: "icon3",
            color: "color3",
            tools: [
                "tool7",
                "tool8",
                "tool9"
            ]
        }
    ];

    it("Renders a button for each skill in the skills prop", () => {

        render(<SkillsCarousel skills={skills} />);

        skills.forEach(skill => {

            expect(screen.queryByRole("button", { name: skill.name })).toBeInTheDocument();
        });
    });

    it("Renders each button with the corresponding icon", () => {

        render(<SkillsCarousel skills={skills} />);

        skills.forEach(skill => {

            expect(window.getComputedStyle(screen.queryByRole("button", { name: skill.name })).backgroundImage).toBe(`url(${skill.icon})`);
        });
    });

    it("Renders the title of the current active skill", () => {

        render(<SkillsCarousel skills={skills} />);

        expect(screen.queryByRole("heading", { name: skills[0].name })).toBeInTheDocument();
    });

    it("Renders the tools of the current active skill", () => {

        render(<SkillsCarousel skills={skills} />);

        skills[0].tools.forEach(tool => {

            expect(screen.queryByText(tool)).toBeInTheDocument();
        });
    });

    it("Changes active skill when another skill is clicked", () => {

        render(<SkillsCarousel skills={skills} />);

        const skillButton = screen.queryByRole("button", { name: skills[1].name });
        fireEvent.click(skillButton);

        expect(screen.queryByRole("heading", { name: skills[1].name })).toBeInTheDocument();
        skills[1].tools.forEach(tool => {

            expect(screen.queryByText(tool)).toBeInTheDocument();
        });
    });
});