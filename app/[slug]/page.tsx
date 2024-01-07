import Menu from "@/components/Menu";
import Image from "next/image";
import React from "react";
import Com from "@/components/Com";

const singlePage = () => {
  return (
    <div className="mt-10 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10">
      <div className="items-center md:flex gap-[50px]">
        <div className="flex-1">
          <h1 className=" text-5xl font-bold mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
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
            <div className="flex flex-col ml-2 mb-10 md:mb-0">
              <span className=" text-gray-700 font-bold">John Doe</span>
              <span className="text-gray-700">06.01.2024</span>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[350px] relative">
          <Image src={"/wah.jpg"} alt={""} fill className="rounded-xl" />
        </div>
      </div>
      <div className="flex gap-[50px] mt-20">
        <div className="flex-[5_5_0%]">
          <div className="font-lg font-medium">
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae magnam asperiores libero vitae blanditiis, officia eius
              debitis id ipsum! Repudiandae perspiciatis modi suscipit molestias
              vel. Repellat quod vitae itaque atque?
            </p>
            <h2 className="font-bold text-2xl mb-5">
              Lorem ipsum dolor sit amet!
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae magnam asperiores libero vitae blanditiis, officia eius
              debitis id ipsum! Repudiandae perspiciatis modi suscipit molestias
              vel. Repellat quod vitae itaque atque?
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae magnam asperiores libero vitae blanditiis, officia eius
              debitis id ipsum! Repudiandae perspiciatis modi suscipit molestias
              vel. Repellat quod vitae itaque atque?
            </p>
          </div>
          <div>
            <Com />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default singlePage;
