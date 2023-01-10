import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <div className="justify-start flex items-center">

            <span className="px-6 py-2 text-white bg-black rounded-xl">Call Now</span><span className="px-5 text-xl font-bold">:</span><span className="text-xl text-purple-800">+91 9686274029</span>
            </div>
            <div className="mt-5">
            <span className="px-6 py-2 text-white bg-black rounded-xl">Email</span><span className="px-5 text-xl font-bold">:</span><span className="text-xl text-purple-800">SANKETH.SURA.1@GMAIL.COM</span>
            </div>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
