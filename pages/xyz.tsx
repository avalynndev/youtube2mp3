import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { MdOpenInNew } from "react-icons/md";
import Visits from "../components/Visits";
import { useEffect, useState } from "react";
import countapi from "countapi-js";

export default function Home() {
  return (
    <div>
      <Head>
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
      <HeroSection />
      <meta charSet="UTF-8" />

      <main>
        <br />
        <div className="title">
          <ul className="title">
            <img src="/website_icon.png" width="86" height="86" />
            <h1>Youtube To Mp3</h1>
          </ul>
        </div>
        <input
          type="text"
          placeholder="Input your youtube video id"
          name="URL"
          id="youtubeid"
        />
        <button type="button" id="button">
          Download
        </button>
        <br />
        <div className="title">
          <ul className="title">
            <h1>Example:- </h1>
            <h4>Enter only the video ID not the URL.</h4>
            <img src="/example.png" />
          </ul>
        </div>
        <p>
          ⚠️ This website might malfunction due to API issues, just reload the
          page to solve it. If it doesn't work, read the docs
        </p>
        <Visits />
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
      </main>
    </div>
  );
}
