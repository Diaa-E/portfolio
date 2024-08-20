import { useEffect, useState } from "react";

export default function useActiveSection(sectionRefs)
{
    const [activeSection, setActiveSection] = useState();

    useEffect(() => {

        function handleScroll()
        {
            // the sectionRefs array needs to be in the same order as in the document from top to bottom

            //Section does not need to be at the very top to be highlighted
            const sectionBuffer = window.innerHeight / 3;

            //solution stolen from https://codepen.io/stepfray/pen/xxzJrYR
            //Similar concept to mine but much simpler
            for (const section of sectionRefs)
            {
                const scrolltDistance = scrollY;
                const sectionTop = section.current.offsetTop;

                if(scrolltDistance >= sectionTop - sectionBuffer)
                {
                    setActiveSection(section.current.id);
                }
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return activeSection;
}