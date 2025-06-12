import { useState } from "react";
const MovieCard = ({ title, image, rating }) => (
  <div className="w-32 sm:w-40 md:w-48">
    <img src={image} alt={title} className="rounded-xl mb-2 shadow-md" />
    {rating && (
      <div className="text-white bg-black text-xs px-2 py-1 rounded absolute m-1">{rating}</div>
    )}
  </div>
);

export default MovieCard;

