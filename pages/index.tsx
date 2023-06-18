import Head from "next/head";
import Visits from "../components/Visits";
import { useEffect, useState } from "react";
import countapi from "countapi-js";

export default function Home() {
  const [visit, setVisit] = useState(0);
  useEffect(() => {
    countapi.update("yt2mp3", "visits", 1).then((result) => {
      console.log(result.value);
      setVisit(result.value);
    });
  }, []);
  return (
    <>
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
      <Visits visit={visit} />
      <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
        <h1 className="text-black pb-10">
          Convert any <span className="text-red-400">Video</span> to
          <span className="text-red-400"> Mp3</span>
        </h1>
      </div>

      <br />
      <center>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                id="youtubelink"
                type="text"
                placeholder="Input a valid video url"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={myFunction}
              >
                Download
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/youtube2mp3"
              >
                Alternative?
              </a>
            </div>
          </form>
        </div>
      </center>
      <br />
      <br />
      <div id="d" className="w">
        <div className="ct">
          <div className="dw">
            <iframe id="buttonApi" src="" height="1" width="1"></iframe>
          </div>
        </div>
      </div>
    </>
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
      "https://apiyoutube.cc/?url=" + link + "&t=1687058713&color=f75959"
    );
    iframe.style.width = "1100px"; // Change the width value as desired
    iframe.style.height = "800px"; // Change the height value as desired
  }
}
