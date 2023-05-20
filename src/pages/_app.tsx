import "src/styles/globals.css";
import Layout from "components/layouts/root";
import type { AppProps } from "next/app";
import Head from "next/head";
import { trpc } from "~/utils/trpc";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PitchedInn</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default trpc.withTRPC(App);
