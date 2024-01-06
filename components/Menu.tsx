import Image from "next/image";
import Link from "next/link";
import React from "react";
import Mwii from "./Mwii";
import Mwi from "./Mwi";
import Mc from "./Mc";

const Menu = () => {
  return (
    <div className="pl-10 md:pl-40 xl:flex-[3_3_0%] xl:pr-20 invisible xl:visible">
      <Mwii />
      <Mc />
      <Mwi />
    </div>
  );
};

export default Menu;
