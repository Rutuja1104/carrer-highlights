import { useEffect } from "react";
import { track } from "./initMixpanel";

export default function useSectionTracker(sectionIds = []) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log('entry',entry)
                    if (entry.isIntersecting) {
                        const sectionName = entry.target.id;
                        track("Section Viewed", { section: sectionName });
                    }
                });
            },
            { threshold: 0.6 } // 60% visible = "viewed"
        );

        const elements = sectionIds.map((id) => document.getElementById(id));

        elements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionIds]);
}
