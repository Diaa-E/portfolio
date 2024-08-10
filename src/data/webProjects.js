import easyCvBuilderImage from "../assets/images/easy_cv_builder.webp";
import battleshipClassicImage from "../assets/images/battleship_classic.webp";
import memoryCardImage from "../assets/images/memory_card.webp";
import threedModelDataSheetGeneratorImage from "../assets/images/3d_model_data_sheet_generator.webp";
import knightsTravailsImage from "../assets/images/knights_travails.webp";
import weatherAppImage from "../assets/images/weather_app.webp";
import stopwatchImage from "../assets/images/stopwatch.webp";
import shoppingCartImage from "../assets/images/shopping_cart.webp";
import bookshelfImage from "../assets/images/bookshelf.webp";
import { generateRandomNeonColor } from "../utils/neonTextUtils";

export const webProjects = [
    {
        name: "Easy CV Builder",
        livePreview: "https://diaa-e.github.io/easy-cv-builder/",
        source: "https://github.com/Diaa-E/easy-cv-builder",
        image: easyCvBuilderImage,
        description: "An easy to use tool for building a CV.",
        tenRating: 10,
        color: generateRandomNeonColor(),
    },
    {
        name: "Battleship Classic",
        livePreview: "https://diaa-e.github.io/battleship-classic/",
        source: "https://github.com/Diaa-E/battleship-classic",
        image: battleshipClassicImage,
        description: "Battleship board game - Human vs. Machine",
        tenRating: 7,
        color: generateRandomNeonColor(),
    },
    {
        name: "Memory Card",
        livePreview: "https://diaa-e.github.io/memory-card/",
        source: "https://github.com/Diaa-E/memory-card",
        image: memoryCardImage,
        description: "A simple memory game using playing cards.",
        tenRating: 8,
        color: generateRandomNeonColor(),
    },
    {
        name: "3D Model Data Sheet Generator",
        livePreview: "https://diaa-e.github.io/3d-model-data-sheet-generator/",
        source: "https://github.com/Diaa-E/3d-model-data-sheet-generator",
        image: threedModelDataSheetGeneratorImage,
        description: "A tool for generating 3D model description for different marketplaces.",
        tenRating: 5,
        color: generateRandomNeonColor(),
    },
    {
        name: "Knight's Travails",
        livePreview: "https://diaa-e.github.io/knights-travails/",
        source: "https://github.com/Diaa-E/knights-travails",
        image: knightsTravailsImage,
        description: "The knight takes the shortest path to any selected square on the chess board.",
        tenRating: 7,
        color: generateRandomNeonColor(),
    },
    {
        name: "Weather App",
        livePreview: "https://diaa-e.github.io/weather-app/",
        source: "https://github.com/Diaa-E/weather-app",
        image: weatherAppImage,
        description: "A weather app that changes the background image besed on the searched city.",
        tenRating: 5,
        color: generateRandomNeonColor(),
    },
    {
        name: "Stopwatch",
        livePreview: "https://diaa-e.github.io/stopwatch/",
        source: "https://github.com/Diaa-E/stopwatch",
        image: stopwatchImage,
        description: "An animated stopwatch and timer.",
        tenRating: 7,
        color: generateRandomNeonColor(),
    },
    {
        name: "Shopping Cart",
        livePreview: "https://shopping-cart-delta-cyan.vercel.app/",
        source: "https://github.com/Diaa-E/shopping-cart",
        image: shoppingCartImage,
        description: "A simple E-commerce site with a functional shopping cart.",
        tenRating: 8,
        color: generateRandomNeonColor(),
    },
    {
        name: "Bookshelf",
        livePreview: "https://bookshelf-beige-zeta.vercel.app/",
        source: "https://github.com/Diaa-E/bookshelf",
        image: bookshelfImage,
        description: "An app for keeping track of book titles in a library",
        tenRating: 5,
        color: generateRandomNeonColor(),
    }
].sort((a, b) => b.tenRating - a.tenRating);