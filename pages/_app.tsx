import "../styles/globals.css";
import type { AppProps } from "next/app";

import "../styles/scss/style.scss";
// import "../styles/js/bootstrap.bundle";

// import fontawesome
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.min";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Andi | Portofolio</title>
        <meta property="og:description" content="Nice to meet you" />
        <meta property="og:image" content="/public/icon/logo.svg" />
        <meta
          property="og:url"
          content="https://www.instagram.com/andiii.sa_/"
        />
        <link rel="shortcut icon" href="/icon/logo.svg" />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        />
      </Head>
      ;
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
