import React from "react";

const Card = ({
  id,
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}) => {
  return (
    <div key={id} class="coffee-card">
      {popular && <span class="pop-tag">Popular</span>}
      <img class="coffe-img" src={image} alt={name} />
      <div class="type">
        <p>{name}</p>
        <span class="price">{price}</span>
      </div>
      <div class="rate-sold">
        {votes > 0 ? (
          <div class="rate">
            <img src="/images/Star_fill.svg" alt="Star_fill" />
            <p>
              {rating} <span>({votes} votes)</span>
            </p>
          </div>
        ) : (
          <div class="rate">
            <img src="./images/Star.svg" alt="Star" />
            <p class="no-rate">No ratings</p>
          </div>
        )}
        {!available && <p class="sold-out">Sold out</p>}
      </div>
    </div>
  );
};

export default Card;
