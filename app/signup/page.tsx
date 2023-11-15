"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { serialize } from "v8";
import toast from "react-hot-toast";

// Import statements remain the same as in your code

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    username: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    // Implement your signup logic here
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Sucess", response.data);
      console.log("Before Redirect");

      router.push("/login");

      // Add this line to check if it reaches here
      console.log("After Redirect");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const isValidEmail = (email: string) => {
    // Basic email validation, you might want to use a library or more sophisticated validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string | any[]) => {
    // Basic password validation, you might want to enhance this based on your requirements
    return password.length >= 6;
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="text-white">
        <h1 className="text-center">{loading ? "processing" : "Signup"}</h1>
        <form>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className={`input-field ${
                !isValidEmail(user.email) ? "error" : ""
              }`}
              placeholder="Enter a valid email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className={`input-field ${
                !isValidPassword(user.password) ? "error" : ""
              }`}
              placeholder="Enter a unique password"
            />
          </div>
          <br />
          <button
            type="button"
            onClick={onSignup}
            className="h-10 w-24 bg-[#B185DB] hover:bg-black rounded-3xl"
          >
            {buttonDisabled ? "Enter all the details please" : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
}
