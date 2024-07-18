import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NavBar from "../NavBar";
import { BrowserRouter } from "react-router-dom";

describe("NavBar Component", () => {

    function setup(jsx) {
        return {
            ...render(jsx, { wrapper: BrowserRouter })
        }
    }

    it("Renders a link to home page", () => {

        setup(<NavBar />);

        expect(screen.queryByRole("link", { name: /home/i })).toBeInTheDocument();
    });

    it("Renders links from scroll anchors prop array", () => {

        const scrollAnchors = [
            { 
                to: "#one", text: "anchor one" 
            },
        ];
        setup(<NavBar scrollAnchors={scrollAnchors} />);

        expect(screen.queryByRole("link", { name: scrollAnchors[0].text})).toBeInTheDocument();
        expect(screen.queryByRole("link", { name: scrollAnchors[0].text}).href).toContain(scrollAnchors[0].to);
    });
});