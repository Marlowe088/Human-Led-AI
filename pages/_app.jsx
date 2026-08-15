import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <a href="#content" className="skip-link">Skip to content</a>
      <Header />
      <main id="content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
