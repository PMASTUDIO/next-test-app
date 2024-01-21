"use client";

import React from "react";

const ProductCard = () => {
  return (
    <div>
      <button className="btn" onClick={() => console.log("Button clicked")}>
        Add to card
      </button>
    </div>
  );
};

export default ProductCard;
