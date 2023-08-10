import React from "react";

import "./Toggle.css";

const toggle = (props) => (
  <button onClick={props.onClick} className="toggle-button">
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
  </button>
);

export default toggle;
