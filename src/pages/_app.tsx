import "src/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "components/layouts/root";
import type { AppProps } from "next/app";
import Head from "next/head";
import { trpc } from "~/utils/trpc";
import { useRouter } from "next/router";

const client = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchOnMount:true,
    }
  },
});
const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>PitchedInn</title>
        </Head>
        <Component {...pageProps} key={router.asPath}/>
      </Layout>
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(App);
