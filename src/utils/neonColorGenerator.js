export default function generateRandomNeonColor()
{
    const colors = [
        "pink",
        "green",
        "yellow",
        "gold",
        "blue",
        "red",
        "purple",
        "cyan"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}