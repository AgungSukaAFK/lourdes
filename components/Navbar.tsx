"use client";

import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import Icon from "./Icon";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navigasi utama">
        <a href="#" className="logo" aria-label={`${site.name} — beranda`}>
          <span className="logo-mark">
            <Icon name="bolt" size={18} />
          </span>
          Lourdes<span className="logo-accent">Autoparts</span>
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <ul id="nav-menu" className={`nav-links${open ? " open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kontak"
              className="btn btn-primary btn-sm"
              onClick={() => setOpen(false)}
            >
              Minta Penawaran
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
