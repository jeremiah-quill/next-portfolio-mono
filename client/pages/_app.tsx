import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../components/Header";
import Favicon from "../components/Favicon";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "../utils/variants";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/orange-favicon.svg" />
        <title>Jeremiah Quill</title>
      </Head>
      <div className="w-full min-h-screen bg-gray-600 flex justify-center p-2">
        <div className="w-full max-w-[1200px] my-0 mx-auto flex justify-center relative">
          <Header />
          <AnimatePresence initial={false} exitBeforeEnter>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
              key={router.route}>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default MyApp;
