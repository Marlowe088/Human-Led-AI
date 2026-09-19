import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span className="byline">© {new Date().getFullYear()} Manoj Tailor</span>
        <div className="legal-links">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/cookie-policy">Cookies Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
