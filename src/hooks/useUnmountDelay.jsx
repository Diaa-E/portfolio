import { useState } from "react";

export default function useUnmountDelay(unmountCallback, mountCallback, unmountDelayMs)
{
    const [mounted, setMounted] = useState(false);

    function mount()
    {
        setMounted(true);
        mountCallback();
    }

    function unmount()
    {
        setMounted(false);
        setTimeout(unmountCallback, unmountDelayMs);
    }

    return [mounted, mount, unmount];
}