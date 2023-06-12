import "src/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "components/layouts/root";
import type { AppProps } from "next/app";
import Head from "next/head";
import { trpc } from "~/utils/trpc";

const client = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchInterval:1000*60*2
    }
  }
});
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>PitchedInn</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(App);
