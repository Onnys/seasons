import React from "react";
import ReactDOM from "react-dom";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  return <div>{season}</div>;
};

ReactDOM.render(<SeasonDisplay />, document.querySelector("#root"));

export default SeasonDisplay;
