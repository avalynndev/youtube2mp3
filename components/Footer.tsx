import React from "react";

const Footer = ({ visit }: any) => {
  return (
    <div>
      <span className="">
        Visits:&nbsp;
        <span className="">{visit}</span>
      </span>
    </div>
  );
};

export default Footer;
