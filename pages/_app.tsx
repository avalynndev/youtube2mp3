import "../styles/main.css";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import countapi from "countapi-js";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
