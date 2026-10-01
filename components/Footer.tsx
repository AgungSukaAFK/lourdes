import { categories, navLinks, site } from "@/lib/site";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="#" className="logo">
            <span className="logo-mark">
              <Icon name="bolt" size={18} />
            </span>
            Lourdes<span className="logo-accent">Autoparts</span>
          </a>
          <p>{site.tagline}. Melayani industri pertambangan, kehutanan, serta minyak &amp; gas sejak {site.foundingYear}.</p>
        </div>
        <nav aria-label="Tautan footer">
          <h2>Navigasi</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2>Produk</h2>
          <ul>
            {categories.slice(0, 5).map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Kontak</h2>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. Seluruh hak cipta
          dilindungi.
        </p>
      </div>
    </footer>
  );
}
