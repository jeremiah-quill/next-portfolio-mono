import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jeremiah Quill</title>
      </Head>
      <div className="w-full min-h-screen bg-gray-600 flex justify-center p-2">
        <div className="md:w-2/3 my-0 mx-auto flex justify-center relative">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
