import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <script src="https://libs.na.bambora.com/customcheckout/1/customcheckout.js"></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
