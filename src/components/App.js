import React from "react";
import "../css/css.styl";
// import { ProgressBar } from "../../node_modules/progress_bar_for_react/publish/app.bundle";
import ProgressBar from "progress_bar_for_react";

const App = (name) => {
  console.log("ProgressBar", ProgressBar);

  return (
    <div id="wrapper">
      Hello {name}
      <div id="container">
        <ProgressBar
          percentage={80}
          tooltip="demo text"
          fillerExtraStyles={{
            backgroundColor: "red",
          }}
        />
      </div>
    </div>
  );
};

export default App;
