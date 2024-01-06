import Link from "next/link";
import React from "react";

const Mc = () => {
  return (
    <div>
      <h2 className="text-gray-600  mt-10">Discover by categories</h2>
      <h1 className="font-bold text-3xl mt-2 mb-2">Categories</h1>
      <div>
        <div className="row mt-6">
          <Link
            href="/blog?cat=style"
            className="btn bg-blue-500 rounded-xl p-2 text-white"
          >
            Style
          </Link>
          <Link
            href="/blog?cat=food"
            className="btn bg-green-400 rounded-xl p-2 text-white ml-11"
          >
            Food
          </Link>
          <Link
            href="/blog?cat=fashion"
            className="btn bg-purple-400 rounded-xl p-2 text-white ml-11"
          >
            Fashion
          </Link>
        </div>
        <div className="row mt-9">
          <Link
            href="/blog?cat=Travel"
            className="btn bg-red-400 rounded-xl p-2 text-white"
          >
            Travel
          </Link>
          <Link
            href="/blog?cat=culture"
            className="btn bg-yellow-400 rounded-xl p-2 text-white ml-9"
          >
            Culture
          </Link>
          <Link
            href="/blog?cat=coding"
            className="btn bg-indigo-500 rounded-xl p-2 text-white ml-9"
          >
            Coding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mc;
