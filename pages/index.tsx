import { MdOpenInNew } from "react-icons/md";
import Head from "next/head";
import Visits from "../components/Visits";
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
      <main>
        <br />
        <div className="title">
          <ul className="title">
            <h1>Youtube To Mp3</h1>
          </ul>
        </div>
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
        <button type="button" onClick={myFunction} id="download">
          Convert
        </button>
        <br/>
        <iframe id="buttonApi" src="" width="50%" height="30%"></iframe>
        <br />
        <p>⚠️ | This website might malfunction on Android devices.</p>
        <div className="container">
          <ul className="github navbar-nav align-items-lg-center ml-lg-auto">
            <li className="nav-item d-none d-lg-block ml-lg-4">
              <a
                href="https://github.com/avalynndev/youtube2mp3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neutral btn-icon"
              >
                <span className="nav-link-inner--text">Github</span>
                <MdOpenInNew />
              </a>
            </li>
          </ul>
        </div>
        <br />
        <Visits visit={visit} />
      </main>
    </>
  );
}


function myFunction() {
  const http = require("https");
  let link = (document.getElementById("youtubelink") as HTMLInputElement).value;

  const options = {
    method: "GET",
    hostname: "youtube-mp3-download1.p.rapidapi.com",
    port: null,
    path: `/dl?id=UxxajLWwzqY`,
    headers: {
      "X-RapidAPI-Key": "145b0a05acmsh54ea0d5c8914ea6p1a61c5jsn80e2478712ef",
      "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
      useQueryString: true,
    },
  };

  const req = http.request(options, function (res: any) {
    const chunks: any = [];

    res.on("data", function (chunk: any) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      const body = JSON.parse(chunks);
      console.log(body.link);
    });
  });

  req.end();
  if (document.getElementById != null) {
    let link = (document.getElementById("youtubelink") as HTMLInputElement)
      .value;
    document
      .getElementById("buttonApi")!
      .setAttribute("src", "https://yt2mp3.co/api/button/mp3?url=" + link);
  }
}
