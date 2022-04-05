import React from "react";

const ReviewCard = ({ loadData }) => {
  const { name, about } = loadData;
  return (
    <div>
      <h1>{name}</h1>
      <p>{about}</p>
      <h6>4.9</h6>
    </div>
  );
};

export default ReviewCard;
