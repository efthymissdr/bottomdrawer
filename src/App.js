import React, { useState } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import BottomDrawer from "./components/BottomDrawer/BottomDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
function App() {
  const [state, setState] = useState(false);
  const openBottomDrawer = () => {
    setState(!state);
  };
  const closeBottomDrawer = () => {
    setState(false);
  };
  return (
    <div style={{ height: "50%" }}>
      <Toolbar onToggleClick={openBottomDrawer} />
      <BottomDrawer isOpen={state} onClick={closeBottomDrawer} />
      {/* <Backdrop /> */}
      <main style={{ marginTop: "64px" }}></main>
    </div>
  );
}

export default App;

/* state = {
  openBottomDrawer: false,
};
const openBottomDrawerButton = () => {
  this.setState((prevState) => {
    return { openBottomDrawer: !prevState.openBottomDrawer };
  }); */
