"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const{data, status} = useSession();
  console.log(data,status);
  
  if(status === "authenticated"){
    router.push("/")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { redirect: false });
  };

  const handleGitHubSignIn = async () => {
    await signIn("github", { redirect: false });
  };

  return (
    <div className="grid place-items-center h-screen bg-black">
      <div className="shadow-lg p-10 rounded-lg border-t-4 border-purple-600 bg-white">
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <button className="bg-purple-600 text-white font-bold cursor-pointer px-8 py-3 rounded-md">
            Login
          </button>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => signIn("google")}
              className="bg-red-600 text-white font-bold cursor-pointer px-6 py-2 rounded-full flex items-center"
            >
              <img
                src="/google.png"  
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Google
            </button>
            <button
              onClick={handleGitHubSignIn}
              className="bg-gray-700 text-black font-bold cursor-pointer px-6 py-2 rounded-full flex items-center"
            >
              <img
                src="/github.png" 
                alt="GitHub Logo"
                className="w-5 h-5 mr-2"
              />
              GitHub
            </button>
          </div>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
