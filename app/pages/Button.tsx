"use client";
import React, { useState } from "react";
import validator from 'validator';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setValidEmail(true); // Reset validEmail on each change
  };

  const validateEmail = () => {
    setValidEmail(validator.isEmail(email));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validEmail) {
      console.log("email submitted:", email);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#D2B7E5] pb-20">
      <p className="font-oi text-4xl justify-center flex items-center text-center">
        Join the Newsletter
        <br /> Today!!
      </p>
      <p className="text-center pt-10">
        Stop settling for mundane newsletters. Discover a
        <br /> personalized experience and transform your inbox today!
      </p>
      <div className="container flex justify-center items-center pt-10">
        <div className="relative">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-[#7251B5] z-20 hover:text-gray-500"></i>
          </div>
          <input
            type="text"
            id="emailInput"
            className={`h-14 w-96 pl-10 pr-20 rounded-full z-0 focus:shadow focus:outline-none bg-[#A06CD5] placeholder-[#7251B5]`}
            placeholder="name@email.com"
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
          />
          <div className="absolute top-2 right-2">
            <button
              type="button"
              className="h-10 w-28 text-white rounded-full bg-[#7251B5] hover:bg-red-600"
              onClick={handleSubmit}
              disabled={!validEmail}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {(submitted && validEmail) && (
        <p className="text-green-500 text-center mt-2">
          Thank you for subscribing!
        </p>
      )}
      {!validEmail && (
        <p className="text-red-500 text-center mt-2">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default Newsletter;


