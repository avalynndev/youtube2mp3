import React from "react";

const Footer = ({ visit }: any) => {
  return (
    <div>
      <span className="">
        <button type="button" onClick={button}>
          Convert
        </button>
        Visits:&nbsp;
        <span className="">{visit}</span>
      </span>
    </div>
  );
};

function button({ visit }: any) {
  console.log(visit);
}

export default Footer;
