import React from "react";

function CheckBox({ data, handleChange }) {
  console.log(data);
  return (
    <div>
      <form>
        <label htmlFor="optInNews">
          <input
            id="news"
            name="optInNews"
            type="checkbox"
            checked={data.optInNews}
            onChange={handleChange}
            style={{ marginRight: ".4rem" }}
          />
          Opt In Newsletter - Yes or No?
        </label>
      </form>
    </div>
  );
}

export default CheckBox;
