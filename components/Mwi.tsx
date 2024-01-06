import Link from "next/link";
import React from "react";
import Image from "next/image";

const Mwi = () => {
  return (
    <div>
      {" "}
      <h2 className="text-gray-600  mt-10">Choosen by the editor</h2>
      <h1 className="font-bold text-3xl mt-2 mb-2">Editor's Pick</h1>
      <div className="">
        <Link href={"/"} className="flex items-center gap-6">
          <div className="flex-1 relative">
            <Image
              src={"/wah1.jpg"}
              alt={""}
              width={40}
              height={40}
              className="h-[50px] w-[50px] rounded-full border-gray-400"
            />
          </div>
          <div className="flex-[4_4_0] flex flex-col gap-[5px] mt-5">
            <span className="border-white rounded-full w-[60px] bg-[#ff8867]">
              <span className="pl-2">Travel</span>
            </span>
            <h3 className="font-lg text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
            <div className="font-sm">
              <span>John Doe</span>
              <span className="text-gray-600">10.10.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className="flex items-center gap-6">
          <div className="flex-1 relative">
            <Image
              src={"/wah2.jpg"}
              alt={""}
              width={40}
              height={40}
              className="h-[50px] w-[50px] rounded-full border-gray-400"
            />
          </div>
          <div className="flex-[4_4_0] flex flex-col gap-[5px] mt-5">
            <span className="border-white rounded-full w-[70px] bg-[#fffc67]">
              <span className="pl-2">Culture</span>
            </span>
            <h3 className="font-lg text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
            <div className="font-sm">
              <span>Suhas A</span>
              <span className="text-gray-600">05.01.2024</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className="flex items-center gap-6">
          <div className="flex-1 relative">
            <Image
              src={"/mj.jpg"}
              alt={""}
              width={40}
              height={40}
              className="h-[50px] w-[50px] rounded-full border-gray-400"
            />
          </div>
          <div className="flex-[4_4_0] flex flex-col gap-[5px] mt-5">
            <span className="border-white rounded-full w-[70px] bg-[#a967ff]">
              <span className="pl-2">Coding</span>
            </span>
            <h3 className="font-lg text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
            <div className="font-sm">
              <span>Sharan Reddy</span>
              <span className="text-gray-600">15.10.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className="flex items-center gap-6">
          <div className="flex-1 relative">
            <Image
              src={"/wah.jpg"}
              alt={""}
              width={40}
              height={40}
              className="h-[50px] w-[50px] rounded-full border-gray-400"
            />
          </div>
          <div className="flex-[4_4_0] flex flex-col gap-[5px] mt-5">
            <span className="border-white rounded-full w-[70px] bg-[#67ff7e]">
              <span className="pl-2">Fashion</span>
            </span>
            <h3 className="font-lg text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
            <div className="font-sm">
              <span>Prateeksha DR</span>
              <span className="text-gray-600">02.05.2004</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Mwi;
