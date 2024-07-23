import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import IconLink from "../IconLink";

describe("SocialLinks Component", () => {

    it("Uses link name from props", () => {

        render(<IconLink to={"some/place"} name={"github"} icon={"path"} />);

        expect(screen.queryByRole("link", { name: /github/i })).toBeInTheDocument();
    });

    it("Uses link icon from props", () => {

        render(<IconLink to={"some/place"} name={"github"} icon={"path"} />);

        expect(screen.queryByRole("img", { hidden: true })).toBeInTheDocument();
        expect(screen.queryByRole("img", { hidden: true }).src).toContain("path");
    });

    it("Uses URL from props", () => {

        render(<IconLink to={"some/place"} name={"github"} icon={"path"} />);

        expect(screen.queryByRole("link", { name: /github/i }).href).toContain("some/place");
    });
});