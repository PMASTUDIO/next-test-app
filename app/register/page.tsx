"use client";

import React, { FormEvent, useState } from "react";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function RegisterUser(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(evt.currentTarget);
      const bodyData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(bodyData),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={RegisterUser}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your first name?</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your first name"
            className="input w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your email?</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="input w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Create a strong password</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Your strong password..."
            className="input w-full max-w-xs"
            required
          />
        </label>
        <button type="submit" className="btn btn-primary">
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
