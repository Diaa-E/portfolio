import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import IconLink from "../IconLink";

describe("SocialLinks Component", () => {

    it("Uses link name from props", () => {

        render(<IconLink to={"some/place"} name={"github"} icon={"path"} />);

        expect(screen.queryByRole("link", { name: /github/i })).toBeInTheDocument();
    });

    it("Uses link icon from props", () => {

        const { container } = render(<IconLink to={"some/place"} name={"github"} icon={"path"} />);

        expect(container.querySelector("div#icon")).toBeInTheDocument();
        expect(window.getComputedStyle(container.querySelector("div#icon")).backgroundImage).toEqual("url(path)");
    });

    it("Uses URL from props", () => {

        render(<IconLink to={"some/place"} name={"github"} icon={"path"} />);

        expect(screen.queryByRole("link", { name: /github/i }).href).toContain("some/place");
    });
});