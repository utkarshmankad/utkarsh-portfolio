"use client";

import { useEffect, useState } from "react";

const links = [
  ["01.Work", "#work"],
  ["02.Products", "#products"],
  ["03.Builds", "#projects"],
  ["04.OSS", "#open-source"],
  ["05.Writing", "#writing"],
  ["06.Contact", "#contact"],
] as const;

export function SiteControls() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setDark(document.documentElement.dataset.theme === "dark"));
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setDark(nextDark);
  }

  return (
    <>
      <div className={`nav-links${menuOpen ? " is-open" : ""}`} id="primary-navigation">
        {links.map(([label, href]) => <a href={href} onClick={() => setMenuOpen(false)} key={href}>{label}</a>)}
      </div>
      <button className="menu-button" type="button" aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label={`${menuOpen ? "Close" : "Open"} section navigation`} onClick={() => setMenuOpen(!menuOpen)}><span aria-hidden>{menuOpen ? "×" : "≡"}</span>Menu</button>
      <button className="theme-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}><span aria-hidden>{dark ? "☼" : "◐"}</span>{dark ? "Light" : "Dark"}</button>
    </>
  );
}
