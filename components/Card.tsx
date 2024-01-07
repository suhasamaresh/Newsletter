import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="mb-8 lg:flex gap-8 lg:items-center pr-10 md:pr-20">
      {/* Image Section */}
      <div className="lg:flex-[2_2_0%] lg:w-1/2">
        <Image
          src={"/wah1.jpg"}
          alt={""}
          width={900}
          height={300}
          className="rounded-lg h-48 lg:h-[250px] w-full object-cover"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex-[3_3_0%] flex-col gap-4 lg:w-1/2 ml-4">
        <div className="text-sm">
          <span className="text-gray-700">11.02.2023 - </span>
          <span className="text-red-600">CULTURE</span>
        </div>
        <Link href={""}>
          <h1 className="font-bold text-lg lg:text-2lg mt-2 lg:mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
        </Link>
        <p className="mt-2 lg:mt-3 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos eaque
          assumenda vero ipsa sit, commodi id at eum. Aliquid ad maiores, natus
          qui voluptatem sint necessitatibus provident vel aut labore? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <Link href={"/"} className="border-b-2 border-red-600 w-max">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
