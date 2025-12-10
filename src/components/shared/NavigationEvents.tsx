"use client";

import { useEffect } from "react";
import NProgress from "nprogress";

export default function NavigationEvents() {
    useEffect(() => {
        // Handle link clicks
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");

            if (link && link.href && !link.href.startsWith("#") && !link.target) {
                const url = new URL(link.href);
                const currentUrl = new URL(window.location.href);

                // Only show progress for different pages
                if (url.pathname !== currentUrl.pathname || url.search !== currentUrl.search) {
                    NProgress.start();
                }
            }
        };

        // Handle browser back/forward buttons
        const handlePopState = () => {
            NProgress.start();
        };

        document.addEventListener("click", handleClick);
        window.addEventListener("popstate", handlePopState);

        return () => {
            document.removeEventListener("click", handleClick);
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    return null;
}
