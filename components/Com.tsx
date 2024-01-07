"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Com = () => {
  const { data: session } = useSession();
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Comments</h1>
      {session ? (
        <div className="items-center justify-between flex gap-[30px] mb-10">
          <textarea placeholder="Write a Comment" className="w-full p-[20px]"></textarea>
          <button className="pt-[16px] pb-[16px] pl-[20px] pr-[20px] bg-[#4cdf4c] rounded-xl font-bold cursor-pointer">Send</button>
        </div>
      ) : (
        <Link href="/login" passHref>
          Login to write a comment
        </Link>
      )}
      <div>
        <div className="mb-10">
          <div className="flex items-center">
            <div>
              <Image
                src={"/wah2.jpg"}
                alt=""
                width={40}
                height={40}
                className="h-[50px] w-[50px] rounded-full"
              />
            </div>
            <div className="flex flex-col ml-2">
              <span className=" text-gray-700 font-bold">John Doe</span>
              <span className="text-gray-700">06.01.2024</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="mb-10">
          <div className="flex items-center">
            <div>
              <Image
                src={"/wah2.jpg"}
                alt=""
                width={40}
                height={40}
                className="h-[50px] w-[50px] rounded-full"
              />
            </div>
            <div className="flex flex-col ml-2">
              <span className=" text-gray-700 font-bold">John Doe</span>
              <span className="text-gray-700">06.01.2024</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div>
              <Image
                src={"/wah2.jpg"}
                alt=""
                width={40}
                height={40}
                className="h-[50px] w-[50px] rounded-full"
              />
            </div>
            <div className="flex flex-col ml-2">
              <span className=" text-gray-700 font-bold">John Doe</span>
              <span className="text-gray-700">06.01.2024</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Com;
