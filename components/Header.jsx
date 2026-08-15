import Link from 'next/link';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/letters', label: 'Letters' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="logo-link" aria-label="Human-Led AI — home">
        <img src="/wordmark.svg" alt="Human-Led AI" />
      </Link>
      <nav className="site-nav" aria-label="Primary">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
