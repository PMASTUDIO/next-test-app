"use client";

import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log(error);

  return (
    <>
      <button className="btn" onClick={reset}>
        Re-try
      </button>
      <div>An unexpected error has occured!</div>
    </>
  );
};

export default ErrorPage;
