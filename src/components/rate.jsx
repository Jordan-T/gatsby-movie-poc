import React from "react";

const Rate = () => {
  return (
    <>
      <div className="rating-pro">
        <label>
          <input type="radio" name="rating-pro" value="10" title="10 stars" />{" "}
          10
        </label>
        <label>
          <input type="radio" name="rating-pro" value="9" title="9 stars" /> 9
        </label>
        <label>
          <input type="radio" name="rating-pro" value="8" title="8 stars" /> 8
        </label>
        <label>
          <input type="radio" name="rating-pro" value="7" title="7 stars" /> 7
        </label>
        <label>
          <input type="radio" name="rating-pro" value="6" title="6 stars" /> 6
        </label>
        <label>
          <input type="radio" name="rating-pro" value="5" title="5 stars" /> 5
        </label>
        <label>
          <input type="radio" name="rating-pro" value="4" title="4 stars" /> 4
        </label>
        <label>
          <input type="radio" name="rating-pro" value="3" title="3 stars" /> 3
        </label>
        <label>
          <input type="radio" name="rating-pro" value="2" title="2 stars" /> 2
        </label>
        <label>
          <input type="radio" name="rating-pro" value="1" title="1 star" /> 1
        </label>
      </div>
    </>
  );
};

export default Rate;
