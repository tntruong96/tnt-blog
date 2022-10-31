import React from "react";
import { FooterContainer } from "./style";
import { FcLike } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="flex justify-center">
        <div className="flex text-4xl">
          <Link passHref href="https://www.facebook.com/orlardo.truong">
            <a target="_blank">
              <FaFacebook className="m-5 ml-0 cursor-pointer" />
            </a>
          </Link>
          <Link passHref href="https://github.com/tntruong96">
            <a target="_blank">
              <FaGithub className="m-5 cursor-pointer" />
            </a>
          </Link>
          <Link passHref href="https://www.instagram.com/nhuttruong_/">
            <a target="_blank">
              <FaInstagram className="m-5 cursor-pointer" />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex cursor-default items-center justify-center text-2xl">
        Made with &nbsp; <FcLike /> &nbsp; by TnT Dev.
      </div>
    </FooterContainer>
  );
};

export default Footer;
