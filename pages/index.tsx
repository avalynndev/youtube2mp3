import Head from "next/head";

import { useEffect, useState } from "react";
import countapi from "countapi-js";

export default function Home() {
  const [visit, setVisit] = useState(0);
  useEffect(() => {
    countapi.update("yt2mp3", "visits", 1).then((result) => {
      setVisit(result.value);
    });
  }, []);
  return (
    <div className="h-lvh bg-backwhite flex flex-col justify-center items-center">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Youtube to Mp3</title>
        <meta
          name="description"
          content="A website that converts Youtube videos into mp3 files. Made using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
        <h1 className="text-gray-900 pb-10">
          Convert any <span className="text-blue-500">Youtube Video</span> to{" "}
          <span className="text-blue-400">Mp3 </span>
        </h1>
      </div>
      <main>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Input your youtube video url"
            name="URL"
            id="youtubelink"
          />
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500"
            type="button"
            onClick={myFunction}
            id="button"
          >
            Download
          </button>
        </div>
        <iframe id="buttonApi" src="" width="400" height="400"></iframe>
      </main>
    </div>
  );
}

function myFunction() {
  if (document.getElementById != null) {
    let link = (document.getElementById("youtubelink") as HTMLInputElement)
      .value;
    console.log(link);
    let iframe = document.getElementById("buttonApi") as HTMLIFrameElement;
    iframe.setAttribute(
        "src",
        "https://dl--master--cdn.ytapis.com/api/widgetv2?url=" + link
      );
    iframe.style.width = "1100px"; // Change the width value as desired
    iframe.style.height = "850px"; // Change the height value as desired
  }
}
