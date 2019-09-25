import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Rating = ({ className, rating, big = false }) => {
  const isGood = rating > 6;

  const color = isGood === true ? "#42b740" : "#ff4141";
  const emptyFillColor = isGood === true ? "#def6de" : "#ffe1e1";

  return (
    <CircularProgressbar
      className={className}
      value={rating}
      maxValue={10}
      text={rating.toFixed(1)}
      counterClockwise
      styles={{
        ...buildStyles({
          rotation: 0.75,
          pathColor: color,
          textColor: color,
          strokeWidth: 10,
          trailColor: emptyFillColor,
          textSize: big ? 30 : 36
        }),
        root: {
          width: big ? 40 : 32
        }
      }}
    />
  );
};

export default Rating;
