import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures from Slime Stickers."
          />
          <meta property="og:site_name" content="slime-gallery.vercel.app" />
          <meta
            property="og:description"
            content="See pictures from Slime Stickers"
          />
          <meta name="keyword" content="Slime, Stickers, Cute, RPG"/>
          <meta property="og:title" content="Slime Stickers Pictures" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Slime Stickers Pictures" />
          <meta
            name="twitter:description"
            content="See pictures from Slime Stickers"
          />
        </Head>
        <body className="bg-slate-50 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
