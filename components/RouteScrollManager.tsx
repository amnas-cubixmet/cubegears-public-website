"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Route-based scroll reset: client navigation opens each new page at the top.
 * Initial browser loads and hash links keep native browser scroll behaviour.
 */
export function RouteScrollManager() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (pathname === previousPath.current) return;
    previousPath.current = pathname;

    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
