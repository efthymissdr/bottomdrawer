import React from "react";
import Toggle from "../BottomDrawer/Toggle";

import "./Toolbar.css";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <Toggle onClick={props.onToggleClick} />
      </div>
      <div className="toolbar_logo">
        <a href="/">ELOQUII</a>
      </div>
      <div className="toolbar_navigation_items"></div>
    </nav>
  </header>
);

export default toolbar;
