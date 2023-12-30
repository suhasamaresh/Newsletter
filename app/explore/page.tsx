// pages/explore.tsx
"use client";

import ChallengesDropdown from "@/components/Dropdown";
import React, { useState } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  category: string;
  image: string;
}

interface Challenge {
  id: number;
  title: string;
  description: string;
}

interface Item {
  id: number;
  title: string;
  content?: string;
  category?: string;
  image?: string;
  description?: string;
}

const ExplorePage: React.FC = () => {
  const categories = ["All", "Technology", "Travel", "Food", "Fashion"];
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleBlogs, setVisibleBlogs] = useState<number>(6);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) =>
      prevVisibleBlogs + 3 > filteredBlogs.length
        ? filteredBlogs.length
        : prevVisibleBlogs + 3
    );
  };

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Blog 1",
      content: "Content of Blog 1",
      category: "Technology",
      image: "/a.jpg",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "Content of Blog 2",
      category: "Travel",
      image: "/b.jpg",
    },
    {
      id: 3,
      title: "Blog 3",
      content: "Content of Blog 3",
      category: "Food",
      image: "/blog3-image.jpg",
    },{
      id: 3,
      title: "Blog 3",
      content: "Content of Blog 3",
      category: "Food",
      image: "/blog3-image.jpg",
    },{
      id: 3,
      title: "Blog 3",
      content: "Content of Blog 3",
      category: "Food",
      image: "/blog3-image.jpg",
    },{
      id: 3,
      title: "Blog 3",
      content: "Content of Blog 3",
      category: "Food",
      image: "/blog3-image.jpg",
    },{
      id: 3,
      title: "Blog 3",
      content: "Content of Blog 3",
      category: "Food",
      image: "/blog3-image.jpg",
    },{
      id: 3,
      title: "Blog 3",
      content: "Content of Blog 3",
      category: "Food",
      image: "/blog3-image.jpg",
    },
    // ... add more blogs with different categories and images
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="bg-[#111111] min-h-screen p-8">
      <h1 className="text-3xl font-poppins text-gray-300 mb-4">Explore Blogs</h1>

      {/* Category Filter */}
      <div className="flex justify-between">
        <div className="mb-4">
          <label
            htmlFor="category"
            className="text-gray-300 mr-2 font-poppins text-2xl font-bold"
          >
            Filter by Category:
          </label>
          <select
            id="category"
            className="px-2 py-1 border rounded"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            style={{ backgroundColor: "#111111", color: "white" }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Challenges Dropdown */}
        <ChallengesDropdown challenges={[]} />
      </div>
      <div>
        <p className=" text-gray-300">Explore some of today's the trending blogs on our platform</p>
      </div>
      {/* Blogs or Challenges */}
      <div className="flex flex-col">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.slice(0, visibleBlogs).map((item) => (
            <div key={item.id} className="cursor-pointer">
              <div className="bg-[#D2B7E5] p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                {"image" in item ? (
                  <>
                    <img
                      src={item.image}
                      alt={`Image for ${item.title}`}
                      className="w-full h-32 object-cover mb-2 rounded"
                    />
                    <h2 className="text-lg font-bold text-black mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-700">{item.content}</p>
                    <p className="text-blue-500 hover:underline mt-4">
                      Read more
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-lg font-bold text-gray-300 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-700">{item.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleBlogs < filteredBlogs.length && (
          <div className="text-center mt-4">
            <button
              className="bg-[#111111] text-gray-300 py-2 px-4 rounded-md"
              onClick={loadMoreBlogs}
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Write a Blog Button */}
      <div className="mt-8">
        <a
          href="/write-blog"
          className="bg-white text-black py-2 px-4 rounded-md text-center"
        >
          Write a Blog
        </a>
      </div>
    </div>
  );
};

export default ExplorePage;
