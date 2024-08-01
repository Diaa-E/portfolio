import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WebProjectItem from "../WebProjectItem";

describe("Web project item component", () => {

    it("Renders a title from the name prop", () => {

        render(<WebProjectItem name={"project title"} color={"red"} description={"desc"} image={"path"} />);

        expect(screen.queryByRole("heading", { name: /project\stitle/i })).toBeInTheDocument();
    });

    it("Renders a description from the description prop", () => {

        render(<WebProjectItem name={"project title"} color={"red"} description={"project details"} image={"path"}/>);

        expect(screen.queryByText(/project\sdetails/i)).toBeInTheDocument();
    });

    it("Renders an image using the path from props", () => {

        render(<WebProjectItem name={"project title"} color={"red"} description={"desc"} image={"path"} />);

        expect(screen.queryByRole("img").src).toContain("path");
    });

    it("Renders a live preview link if a live preview link prop is provided", () => {

        render(<WebProjectItem name={"project title"} color={"red"} description={"desc"} image={"path"} livePreview={"live"}/>);

        expect(screen.queryByRole("link", { name: /live/i })).toBeInTheDocument();
        expect(screen.queryByRole("link", { name: /live/i }).href).toContain("live");
    });

    it("Does not render a live preview link if no live preview link prop is provided", () => {

        render(<WebProjectItem name={"project title"} color={"red"} description={"desc"} image={"path"}/>);

        expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("Renders a source link if a source link prop is provided", () => {

        render(<WebProjectItem name={"project title"} color={"red"} description={"desc"} image={"path"} source={"source"}/>);

        expect(screen.queryByRole("link", { name: /source/i })).toBeInTheDocument();
        expect(screen.queryByRole("link", { name: /source/i }).href).toContain("source");
    });

    it("Does not render a source link if no source link prop is provided", () => {

        render(<WebProjectItem name={"project title"} color={"red"} description={"desc"} image={"path"}  />);

        expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });
});