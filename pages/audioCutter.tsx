import React from "react";
import Head from "next/head";
import Visits from "../components/Visits";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import countapi from "countapi-js";

export default function audioCutter() {
  const [visit, setVisit] = useState(0);
  useEffect(() => {
    countapi.update("mp3crop-yt", "visits", 1).then((result) => {
      setVisit(result.value);
    });
  }, []);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Audio Cutter</title>
        <meta
          name="description"
          content="Crops audio/mp3 for you. Made using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
          <h1 className="text-gray-900 pb-10">
          Trim or cut any audio file {" "}
            <span className="text-blue-500">online</span>
          </h1>
        </div>
        <br />
        <iframe
          src="https://avalynndev.github.io/audio-cutter/"
          width="100%"
          height="280"
          scrolling="no"
        ></iframe>
        <br />
        <Visits visit={visit} />
        <br />
      </main>
    </>
  );
}
