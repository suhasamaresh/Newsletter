// components/ChallengesDropdown.tsx
import React, { useState } from "react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ChallengesDropdownProps {
  challenges: Challenge[];
}

const ChallengesDropdown: React.FC<ChallengesDropdownProps> = ({ challenges }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300"
          id="challenges-dropdown"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Challenges
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showDropdown && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="challenges-dropdown"
        >
          <div className="py-1">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="flex items-center justify-between px-4 py-2 text-sm text-gray-700">
                <img
                  src={challenge.image}
                  alt={`Image for ${challenge.title}`}
                  className="w-6 h-6 object-cover rounded mr-2"
                />
                <div>
                  <p className="font-semibold">{challenge.title}</p>
                  <p className="text-xs">{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengesDropdown;
