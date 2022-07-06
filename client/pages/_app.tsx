import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../components/Header";
import Favicon from "../components/Favicon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/orange-favicon.svg" />
        <title>Jeremiah Quill</title>
      </Head>
      <div className="w-full min-h-screen bg-gray-600 flex justify-center p-2">
        <div className="w-full max-w-[1200px] my-0 mx-auto flex justify-center relative">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
