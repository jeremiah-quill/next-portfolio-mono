import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-screen bg-gray-600 flex justify-center">
      <div className="md:w-2/3 my-0 mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
