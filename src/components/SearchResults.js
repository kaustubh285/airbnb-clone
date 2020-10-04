import React from "react";
import "./searchResults.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { StarBorder } from "@material-ui/icons";
import StarIcon from "@material-ui/icons/Star";

function SearchResults({
  img,
  location,
  title,
  description,
  star,
  price,
  reviews,
}) {
  return (
    <div className='searchResults'>
      <img src={img} alt={title} />
      <div className='searchResults__info'>
        <div className='searchResults__infoTop'>
          <div className='searchResults__infoTop_content'>
            <p>{location}</p>
            <h3>{title}</h3>
            <p className='title_underline'>_____</p>
            <p className='content__description'>{description}</p>
          </div>
          <FavoriteBorderIcon className='FavoriteBorderIcon' />
        </div>
        <div className='searchResults__infoBottom'>
          <p className='reviews-ratings'>
            <StarIcon />
            {star} ({reviews})
          </p>
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
