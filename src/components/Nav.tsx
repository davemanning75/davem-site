import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <a className="nav-logo" href="#top">
        DM / davem.ca
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">What I Do</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/davemanninggta/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}
