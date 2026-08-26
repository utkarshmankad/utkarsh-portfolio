"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-analytics-event]") : null;
      if (!target) return;
      const eventName = target.dataset.analyticsEvent;
      if (!eventName) return;
      track(eventName, { label: target.dataset.analyticsLabel ?? "unknown" });
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
