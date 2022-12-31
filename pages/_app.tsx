import "../styles/main.css";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import countapi from "countapi-js";

export default function App({ Component, pageProps }: AppProps) {
  const [visit, setVisit] = useState(0);
  useEffect(() => {
    countapi.update("yt2mp3", "visits", 1).then((result) => {
      console.log(result.value);
      setVisit(result.value);
    });
  }, []);
  return (
    <>
      <Footer visit={visit} />
      <Component {...pageProps} />
    </>
  );
}
