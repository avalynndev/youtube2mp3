import Head from "next/head";
import { Inter } from "@next/font/google";
import {MdOpenInNew} from 'react-icons/md'
import Navbar from "../components/Navbar";

export default function Home() {
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
        <link href="https://demos.creative-tim.com/argon-design-system/assets/css/argon-design-system.min.css?v=1.2.0" rel="stylesheet" />
      </Head>
      <Navbar />
      <main>
        <br/>
      <div>
        <input
          type="text"
          placeholder="Input your youtube video id"
          name="URL"
          id="youtubeid"
        />
        <button type="button" onClick={myFunction} id="button">
          Download
        </button>
      </div>
        <br />
        <iframe
          id="buttonApi"
          src=""
          width="50%"
          height="30%"
        ></iframe>
        <br />
      </main>
    </>
  );
}

function myFunction() {
  if (document.getElementById != null) {
    let link = (document.getElementById("youtubelink") as HTMLInputElement).value
    console.log(link);
    document.getElementById("buttonApi")!.setAttribute('src', "https://yt2mp3.co/api/button/mp3?url=" + link)
  }
}