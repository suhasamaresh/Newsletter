"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen bg-black">
      <div className="shadow-lg p-10 bg-white flex flex-col gap-4 my-6 rounded-lg">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <div>
          Blog Contributions: <span className="font-bold">{session?.user?.blogContributions || 0}</span>
        </div>
        <div>
          Followers: <span className="font-bold">{session?.user?.followers || 0}</span>
        </div>
        <div>
          Following: <span className="font-bold">{session?.user?.following || 0}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-purple-600 text-white font-bold px-8 py-3 rounded-md mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
