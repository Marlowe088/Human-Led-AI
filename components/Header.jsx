import Link from 'next/link';

const NAV = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/join', label: 'Join Human-Led AI Letters' },
];

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="logo-link" aria-label="Manoj Tailor — home">
        <img src="/wordmark.svg" alt="Manoj Tailor" />
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
