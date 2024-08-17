import { fireEvent, render, screen } from "@testing-library/react";
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

    it("Marks active section based on active anchor prop", () => {

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

describe("NavBar Component - Small Screen", () => {

    function setup(jsx) {
        return {
            ...render(jsx, { wrapper: BrowserRouter })
        }
    }

    beforeEach(() => {

        window.innerWidth = 500
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

    it("Renders a nav menu button", () => {

        const scrollAnchors = [
            { 
                to: "#one", text: "anchor one" 
            },
        ];

        setup(<NavBar scrollAnchors={scrollAnchors} activeAnchor={"one"} />);

        expect(screen.queryByRole("button", { name: /menu/i })).toBeInTheDocument();
    });

    it("Sets nav menu dialog closed by default", () => {

        const scrollAnchors = [
            { 
                to: "#one", text: "anchor one" 
            },
        ];

        setup(<NavBar scrollAnchors={scrollAnchors} activeAnchor={"one"} />);

        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("Opens nav menu dialog when nav menu button is clicked", () => {

        const scrollAnchors = [
            { 
                to: "#one", text: "anchor one" 
            },
        ];

        setup(<NavBar scrollAnchors={scrollAnchors} activeAnchor={"one"} />);
        const menuButton = screen.queryByRole("button", { name: /menu/i });
        fireEvent.click(menuButton);

        expect(screen.queryByRole("dialog")).toBeInTheDocument();
    });

    it("Renders links from scroll anchors prop array", () => {

        const scrollAnchors = [
            { 
                to: "#one", text: "anchor one" 
            },
        ];

        setup(<NavBar scrollAnchors={scrollAnchors} activeAnchor={"one"} />);
        const menuButton = screen.queryByRole("button", { name: /menu/i });
        fireEvent.click(menuButton);

        expect(screen.queryByRole("link", { name: scrollAnchors[0].text})).toBeInTheDocument();
        expect(screen.queryByRole("link", { name: scrollAnchors[0].text}).href).toContain(scrollAnchors[0].to);
    });

    it("Marks active section based on active anchor prop", () => {

        const scrollAnchors = [
            { 
                to: "#one", text: "anchor one" 
            },
            {
                to: "#two", text: "anchor two"
            }
        ];

        setup(<NavBar scrollAnchors={scrollAnchors} activeAnchor={"two"} />);
        const menuButton = screen.queryByRole("button", { name: /menu/i });
        fireEvent.click(menuButton);

        expect(screen.queryByRole("link", { name: scrollAnchors[1].text}).className).toContain("active")
    });
});