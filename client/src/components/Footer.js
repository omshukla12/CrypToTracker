import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex p-4 justify-between items-center">
      <h1 className="text-[20px] font-black cursor-pointer">
        Made with ❤️ by
        <a
          className="text-blue-600 hover:text-blue-800"
          href="https://github.com/omshukla12"
          target="_blank"
        >
          {" "}
          Om Shukla
        </a>
      </h1>
      <div className="flex text-[30px] gap-3">
        <FaWhatsapp color="green" />
        <FaFacebook color="blue" />
        <FaYoutube color="red" />
        <a
          className="text-blue-600 hover:text-blue-800"
          href="https://github.com/omshukla12"
          target="_blank"
        >
          <FaGithub color="black" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
