import "../styles/main.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import countapi from "countapi-js";

export default function App({ Component, pageProps }: AppProps) {
  const [visitorNum, setVisit] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  useEffect(() => {
    countapi.update("yt2mp3", 'visits', 1).then((result) => {
      setVisit(result.value);
    });
  }, []);
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            gtag('event', 'page_view', {
              page_path: '/',
              page_title: 'Youtube to Mp3',
              page_location: 'https://yt2mp3.is-an.app/'
              
            })
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
