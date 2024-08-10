import { useEffect } from "react";

export default function useIntersectionObserver(refsArray, intersectionCallback, fallbackCallback)
{
    useEffect(() => {

        //fallback if intersection observer isn't supported
        if (!IntersectionObserver)
        {
            fallbackCallback();

            return () => {};
        }

        const observer = new IntersectionObserver(entries => intersectionCallback(entries), { rootMargin: "50%" });

        refsArray.forEach(ref => observer.observe(ref.current));

        return () => observer.disconnect();
    }, []);
}