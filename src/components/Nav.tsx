import { siteCopy } from "@/data/portfolio";

export default function Nav() {
  const { navigation } = siteCopy;

  return (
    <nav className="site-nav" aria-label="Primary">
      <a className="nav-logo" href="#top">
        {navigation.brand}
      </a>
      <div className="nav-links" role="list">
        {navigation.links.map((link) => (
          <a key={link.href} href={link.href} className="nav-link" role="listitem">
            {link.label}
          </a>
        ))}
      </div>
      <a className="nav-cta" href="#contact">
        {navigation.ctaLabel}
      </a>
    </nav>
  );
}
