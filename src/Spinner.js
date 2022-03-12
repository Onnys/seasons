import React from "react";
import ReactDOM from "react-dom";

const Spinner = (props) => {
  return <div className="ui active dimmer">
    <div className="ui big text loader">{props.message}</div>  
    </div>;
};
ReactDOM.render(<Spinner />, document.querySelector("#root"));
export default Spinner;
