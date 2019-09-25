import React from "react";
import dayjs from "../plugins/dayjs";
import Rating from "./raiting";

const Review = ({ name, date, content, rating, withSpoiler = false }) => {
  return (
    <li>
      <div className="circle-rating-pro">
        <Rating rating={rating} />
      </div>
      <h6>{name}</h6>
      <div className="sidebar-review-time">{dayjs(date).format("LL")}</div>
      {withSpoiler && <div className="spoiler-review">Contains Spoiler</div>}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </li>
  );
};

export default Review;
