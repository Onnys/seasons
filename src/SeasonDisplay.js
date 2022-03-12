import React from "react";
import ReactDOM from "react-dom";

const SeasonDisplay = (props) => {
  return <div>{props.latitude}</div>;
};

ReactDOM.render(<SeasonDisplay />, document.querySelector("#root"));

export default SeasonDisplay;
