import Head from "next/head";
import { Inter } from "@next/font/google";

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
          content="A Youtube2Mp3 converting website. Made Using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <input
          type="text"
          placeholder="Input your youtube url"
          name="URL"
          id="youtubelink"
        />
        <button type="button" onClick={myFunction} id="download">
          Convert
        </button>
        <br />
        <iframe
          id="buttonApi"
          src=""
          width="40%"
          height="20%"
          allowTransparency={true}
        ></iframe>
      </main>
    </>
  );
}

function myFunction() {
  if (document.getElementById != null) {
    let link = document.getElementById("youtubelink").value;
    console.log(link);
    document.getElementById("buttonApi").src =
      "https://yt2mp3.co/api/button/mp3?url=" + link;
  }
}
