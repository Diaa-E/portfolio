import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SocialLinks from "../SocialLinks";

describe("SocialLinks Component", () => {

    it("Uses link name from props array", () => {

        const socialLinks = [
            {
                to: "some/place",
                name: "github",
                icon: "path"
            }
        ];
        render(<SocialLinks socialLinks={socialLinks} />);

        expect(screen.queryByRole("link", { name: /github/i })).toBeInTheDocument();
    });

    it("Uses link icon from props", () => {

        const socialLinks = [
            {
                to: "some/place",
                name: "github",
                icon: "path"
            }
        ];
        render(<SocialLinks socialLinks={socialLinks} />);

        expect(screen.queryByRole("img", { hidden: true })).toBeInTheDocument();
        expect(screen.queryByRole("img", { hidden: true }).src).toContain("path");
    });

    it("Uses URL from props", () => {

        const socialLinks = [
            {
                to: "some/place",
                name: "github",
                icon: "path"
            }
        ];
        render(<SocialLinks socialLinks={socialLinks} />);

        expect(screen.queryByRole("link", { name: /github/i }).href).toContain("some/place");
    });
});