import React from "react";
import "./homeCard.css";

function HomeCard({ src, title, description, price }) {
  return (
    <div className='homeCard'>
      <img src={src} alt={title} />
      <div className='homeCard__info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default HomeCard;
