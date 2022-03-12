import "./SeasonDisplay.css";
import React from "react";
import ReactDOM from "react-dom";

const seasonConfig = {
  summer: {
    text: "Let's have a beer",
    iconName: "sun",
  },
  winter: {
    text: "Let's have a hot chocolate",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());

  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

ReactDOM.render(<SeasonDisplay />, document.querySelector("#root"));

export default SeasonDisplay;
