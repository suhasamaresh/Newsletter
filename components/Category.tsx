import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories: React.FC = () => {
  return (
    <div className="p-4 md:pl-20 md:pr-20 lg:pr-40 lg:pl-40 items-start">
      <h1 className="font-bold text-2xl md:text-[40px] mt-10 mb-6 md:mb-10">Popular categories</h1>
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <Link href="/blog?cat=style" className="flex items-center gap-2 md:gap-[10px] capitalize w-full md:w-2/12 bg-green-300 justify-center h-14 rounded-lg mb-4 md:mb-0">
          <Image src="/wah.jpg" alt="image" width={32} height={32} className="rounded-lg" />
          style
        </Link>
        <Link href="/blog?cat=food" className="flex items-center gap-2 md:gap-[10px] capitalize w-full md:w-2/12 bg-orange-300 justify-center h-14 rounded-lg mb-4 md:mb-0">
          <Image src="/wah.jpg" alt="image" width={32} height={32} className="rounded-lg" />
          food
        </Link>
        <Link href="/blog?cat=fashion" className="flex items-center gap-2 md:gap-[10px] capitalize w-full md:w-2/12 bg-purple-300 justify-center h-14 rounded-lg mb-4 md:mb-0">
          <Image src="/wah.jpg" alt="image" width={32} height={32} className="rounded-lg" />
          fashion
        </Link>
        <Link href="/blog?cat=Travel" className="flex items-center gap-2 md:gap-[10px] capitalize w-full md:w-2/12 bg-red-300 justify-center h-14 rounded-lg mb-4 md:mb-0">
          <Image src="/wah.jpg" alt="image" width={32} height={32} className="rounded-lg" />
          Travel
        </Link>
        <Link href="/blog?cat=culture" className="flex items-center gap-2 md:gap-[10px] capitalize w-full md:w-2/12 bg-yellow-300 justify-center h-14 rounded-lg mb-4 md:mb-0">
          <Image src="/wah.jpg" alt="image" width={32} height={32} className="rounded-lg" />
          culture
        </Link>
        <Link href="/blog?cat=coding" className="flex items-center gap-2 md:gap-[10px] capitalize w-full md:w-2/12 bg-blue-300 justify-center h-14 rounded-lg mb-4 md:mb-0">
          <Image src="/wah.jpg" alt="image" width={32} height={32} className="rounded-lg" />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default Categories;
