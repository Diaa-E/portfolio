import { useEffect, useState } from "react";

export default function useUnmountDelay(unmountCallback, unmountDelayMs)
{
    const [mounted, setMounted] = useState(false);

    useEffect(() => {

        if (!mounted)
        {
            const timer = setTimeout(unmountCallback, unmountDelayMs);

            return () => clearTimeout(timer);
        }

    }, [mounted]);

    return [mounted, setMounted];
}