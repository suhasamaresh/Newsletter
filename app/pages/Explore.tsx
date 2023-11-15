import Button from "@/app/pages/Button";
import React from "react";

const CardWithDescription = () => {
  return (
    <div className="bg-[#D2B7E5] p-4 md:p-10">
      <div className="md:flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="max-w-md rounded-3xl overflow-hidden shadow-lg cursor-text transition duration-300 ease-in-out hover:scale-105 mb-4 md:mb-0 sm:ml-20">
          <img src="a.jpg" alt="Card 1" className="w-full h-64 object-cover" />
          <div className="px-6 py-4">
            <div className="text-xl font-thin mb-2 font-oi">Learning Zone</div>
            <p className="text-gray-700">
              Boost your knowledge with educational and insightful content.
            </p>
          </div>
        </div>
        <div className="max-w-md rounded-3xl overflow-hidden shadow-lg transition duration-300 cursor-text hover:scale-105 sm:ml-20">
          <img src="b.jpg" alt="Card 2" className="w-full h-64 object-cover" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 2</div>
            <p className="text-gray-700">
              Description for Card 2 goes here. This card contains an image and
              its description below it.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <img src="news3.webp" alt="logo" className="h-48 w-48 md:h-[300px] md:w-[300px]" />
      </div>
      <div>
        <p className=" text-left">Whenever you don't feel motivated , try to talk yourself into doing it for just 5 minutes</p>
      </div>
    </div>
  );
};

export default CardWithDescription;

