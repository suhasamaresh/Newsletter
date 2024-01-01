// src/BlogDraftingPage.tsx
"use client"
import React, { useState } from 'react';

const BlogDraftingPage: React.FC = () => {
  const [coverPopupVisible, setCoverPopupVisible] = useState(false);

  const openCoverPopup = () => {
    setCoverPopupVisible(true);
  };

  const closeCoverPopup = () => {
    setCoverPopupVisible(false);
    // You can add logic to handle the selected cover image here
  };

  const addSubtitle = () => {
    // You can add logic to handle adding subtitles here
    alert('Add Subtitle functionality');
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="mb-4">
          <button
            className="mr-2 bg-indigo-500 text-white px-4 py-2 rounded"
            onClick={openCoverPopup}
          >
            Add Cover
          </button>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded"
            onClick={addSubtitle}
          >
            Add Subtitle
          </button>
        </div>

        <div className="mb-4">
          <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
            Preview
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Publish
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="blogTitle">Title:</label>
        <input
          type="text"
          id="blogTitle"
          placeholder="Enter your title"
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="blogContent">Content:</label>
        <textarea
          id="blogContent"
          placeholder="Write your blog content"
          className="border p-2 w-full"
        ></textarea>
      </div>

      {/* Cover Popup */}
      {coverPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg relative">
            <input type="file" id="coverImage" accept="image/*" />
            <button
              onClick={closeCoverPopup}
              className="absolute top-0 right-0 m-2 bg-red-500 text-white px-2 py-1 rounded-full"
            >
              x
            </button>
            <button
              onClick={closeCoverPopup}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Cover
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDraftingPage;
