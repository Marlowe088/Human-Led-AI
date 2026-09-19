import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="logo-link" aria-label="Manoj Tailor — home">
        <img src="/wordmark.svg" alt="Manoj Tailor" />
      </Link>
    </header>
  );
}
