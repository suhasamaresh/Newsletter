import Image from "next/image";
import Link from "next/link";
import React from "react";
import Mwii from "./Mwii";
import Mwi from "./Mwi";
import Mc from "./Mc";

const Menu = () => {
  return (
    <div className=" xl:flex-[2_2_0%] xl:pr-20 hidden xl:block mr-20">
      <Mwii />
      <Mc />
      <Mwi />
    </div>
  );
};

export default Menu;
