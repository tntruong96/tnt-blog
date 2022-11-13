import SpinLoading from "@components/spin";
import type { DocumentContext } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx);

    return initalProps;
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content={`Let&apos;s Vitsit my Website`}
            key="desc"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
