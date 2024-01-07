"use client";
import React from "react";
import { IoIosAddCircleOutline, IoMdCloudOutline } from 'react-icons/io';
import { FaFileVideo, FaFileImage } from 'react-icons/fa';
import { useState } from "react";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

const page = () => {
  const [open, setOpen] = useState(false);
  const [value,setValue] = useState("");
  return (
    <div className="pl-40 pt-10 pr-40 items-start">
      <input placeholder="Title"  className="p-[20px] text-5xl border-none outline-none bg-transparent"/>
      <div className="flex gap-[20px] h-[700px] flex-col">
        <button onClick={() => setOpen(!open)} className="h-[36px] w-[36px] rounded full flex flex-row items-center justify-center ">
          <IoIosAddCircleOutline size={20} />
        </button>
        {open && (
          <div className="flex gap-[20px] absolute z-[999] ml-14 pl-4">
            <button className="h-[36px] w-[36px] rounded-full items-center justify-center border-[#1a8917]">
              <IoMdCloudOutline size={20} />
            </button> 
            <button className="h-[36px] w-[36px] rounded-full  items-center justify-center border-[#1a8917]">
              <FaFileVideo size={20} />
            </button>
            <button className="h-[36px] w-[36px] rounded-full  items-center justify-center border-[#1a8917]">
              <FaFileImage size={20} />
            </button>
          </div>
        )}
        <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Tell your story..." className="w-full h-full bg-transparent p-[20px] mb-10"/>

      </div>
      <button className="bg-[#1a8417] rounded-xl text-white top-8 right-5 pt-[10px] pb-[10px] pl-[20px] pr-[20px] border none">Publish</button>
    </div>
  );
};

export default page;
