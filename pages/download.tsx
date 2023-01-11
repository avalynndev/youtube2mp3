import React from "react";
const feather = require('./res/js/feather.min.js')
import Head from "next/head";
import Visits from "../components/Visits";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import countapi from "countapi-js";

export default function Home() {
  const [visit, setVisit] = useState(0);
  useEffect(() => {
    countapi.update("mp3crop-yt", "visits", 1).then((result) => {
      setVisit(result.value);
    });
    feather.replace();
    initLatestVersion();
  }, []);
  
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Download</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
	<body>
	    <section className="main-wrapper">
	        <div className="vertical-center">
    	        <div className="title-wrapper">
        		    <h1>Youtube 2 Mp3</h1>
        		    <h3>minimalistic but powerful code editor</h3>
    				<span>latest version <span id="version_insert"></span></span>
    			</div>
    			<div className="dl-panel">
    				<a id="download-win" href="" className="download-btn">
    					<i data-feather="download"></i>
    					<span><strong>Download</strong><br />for windows 32 Bit</span>
    				</a>
    				<a id="download-win64" href="" className="download-btn"><i data-feather="download"></i>
    					<span><strong>Download</strong><br />for windows 64 Bit</span>
    				</a>       
    	        </div>
	        </div>
	    </section>	
	</body>
    </>
  );
}

function initLatestVersion(){
  fetch('https://api.github.com/repos/avalynndev/youtube2mp3/releases/latest')
    .then(response => response.json())
    .then(data => {
      document.getElementById("version_insert")!.innerHTML = data.tag_name
      const root_url = "https://github.com/avalynndev/youtube2mp3/releases/latest/download";
      document.getElementById("download-win")!.setAttribute('href', `${root_url}/Youtube2mp3-win32-ia32.zip`)
			document.getElementById("download-win64")!.setAttribute('href', `${root_url}/Youtube2mp3-win64.zip`)
    });							
}