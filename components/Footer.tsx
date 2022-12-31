import React from "react";

const Footer = ({ visit }: any) => {
  return (
    <div>
      <p className="">
        📄Visits:&nbsp;
        <p className="">{visit}</p>
      </p>
    </div>
  );
};

export default Footer;
