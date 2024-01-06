import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <div className="container mt-12 px-4 py-8 flex items-center justify-between text-softTextColor md:ml-16 md:mr-24">
      <div className="flex-1 flex flex-col gap-4 ml-20">
        <div className="flex items-center gap-4 rounded">
          <Image src="/wah.jpg" alt="lama blog" width={50} height={50} />
          <h1 className="text-2xl font-bold">Lamablog</h1>
        </div>
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className="flex gap-4 mt-2">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
      <div className="flex-1 flex justify-end gap-14 mr-20">
        <div className="flex flex-col gap-4">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-4 mr-28">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
