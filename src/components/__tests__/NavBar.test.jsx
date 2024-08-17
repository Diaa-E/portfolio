import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import NavBar from "../NavBar";
import { BrowserRouter } from "react-router-dom";

describe("NavBar Component - Wide Screen", () => {

    function setup(jsx) {
        return {
            ...render(jsx, { wrapper: BrowserRouter })
        }
    }

    beforeEach(() => {

        window.innerWidth = 1000
    });

    it("Renders a link to home page", () => {

        const scrollAnchors = [
            { 
                to: "#one", text: "anchor one" 
            },
        ];

        setup(<NavBar scrollAnchors={scrollAnchors} activeAnchor={"one"} />);

        expect(screen.queryByRole("link", { name: /home/i })).toBeInTheDocument();
    });

    it("Renders links from scroll anchors prop array", () => {

        const scrollAnchors = [
            { 
                to: "#one", text: "anchor one" 
            },
        ];
        setup(<NavBar scrollAnchors={scrollAnchors} activeAnchor={"one"} />);

        expect(screen.queryByRole("link", { name: scrollAnchors[0].text})).toBeInTheDocument();
        expect(screen.queryByRole("link", { name: scrollAnchors[0].text}).href).toContain(scrollAnchors[0].to);
    });

    it("Marks highlights active section based on active anchor prop", () => {

        const scrollAnchors = [
            { 
                to: "#one", text: "anchor one" 
            },
            {
                to: "#two", text: "anchor two"
            }
        ];

        setup(<NavBar scrollAnchors={scrollAnchors} activeAnchor={"two"} />);

        expect(screen.queryByRole("link", { name: scrollAnchors[1].text}).className).toContain("active")
    });
});