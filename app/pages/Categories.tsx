import React from "react";

const Categories = () => {
  return (
    <div className="bg-[#A06CD5]">
      <h3 className="text-center ">categories</h3>
      <div className="flex md:justify-center items-center">
        <p className="font-oi md:text-5xl text-3xl text-black pt-[80px] pl-6">
          Discover the
          <br /> world of <br />
          newsletters
          <br /> catered for
          <br /> your specific
          <br /> interests and
          <br /> preferences.
        </p>
        <img
          src="news2.webp"
          alt="logo"
          className="md:h-[600px] md:w-[600px] h-[300px] w-[280px]"
        ></img>
      </div>
    </div>
  );
};

export default Categories;
