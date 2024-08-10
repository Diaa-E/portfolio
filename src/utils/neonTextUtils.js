export function generateNeonTextActivator(activeClass)
{
    return (entries) => {
        entries.forEach(entry => {
                
            if (entry.isIntersecting)
            {
                entry.target.classList.add(activeClass);
            }
            else
            {
                entry.target.classList.remove(activeClass);
            }
        });
    };
}

export function generateRandomNeonColor()
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