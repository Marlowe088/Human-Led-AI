import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span className="byline">© {new Date().getFullYear()} Human-Led AI — Manoj Tailor</span>
        <div className="legal-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
