import Head from "next/head";
import Navbar from "../components/Navbar";
import { MdOpenInNew } from "react-icons/md";
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
      <Navbar />
      <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
        <h1 className="text-gray-900 pb-10">
          Enter only the <span className="text-red-500">Video ID </span> not the{" "}
          <span className="text-red-400">URL</span>
        </h1>
      </div>
      <main>
        <div>
          <center>
            <div className="w-full max-w-xs">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Input your youtube video id"
                    name="URL"
                    id="youtubeid"
                  />
                  <br /> <br />
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={myFunction}

                    >
                      Download
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </center>
        </div>
        <center>
          <h4 className="text-pink-400 pb-10">
            Example: <span className="text-blue-400">Only paste this:</span>
          </h4>
          <img src="https://raw.githubusercontent.com/avalynndev/youtube2mp3/64309269471dacceb2170b49bf9865956bdee4ea/public/example.png"></img>
        </center>
        <br />
        <Visits visit={visit} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Yt2mp3.is-an.app™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Another Link</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Feeback</a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}

function myFunction() {
  const http = require("https");

  let link = (document.getElementById("youtubeid") as HTMLInputElement).value;
  if (link == "") {
    alert(
      "Please Enter a Valid Youtube ID."
    );
  } else {
    console.log(link)
    const options = {
      method: "GET",
      hostname: "youtube-mp3-download1.p.rapidapi.com",
      port: null,
      path: `/dl?id=${link}`,
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
        const DownloadURL = body.link;
        window.open(DownloadURL, "_blank");
      });
    });

    req.end();
  }
}
