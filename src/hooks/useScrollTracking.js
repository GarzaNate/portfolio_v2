import { useEffect } from "react";

const useScrollTracking = () => {
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            console.log(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}

export default useScrollTracking;