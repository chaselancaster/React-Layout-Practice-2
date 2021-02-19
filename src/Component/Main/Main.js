import React from "react";

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="rows">
        <div className="row1 row">
          <div className="row1-left">
            <h2>CSS Flexbox</h2>
            <p>
              This site is a collection of examples, video and other information
              to help you learn CSS Flexbox. Developed and maintained by{" "}
              <span>Chase Lancaster</span>
            </p>
          </div>
          <div className="row1-right">
            <h3>The Video Tutorial</h3>
            <p>
              A collection of short and to the point videos, demonstrating
              various parts of the CSS FLexbox specification.
            </p>
          </div>
        </div>
        <div className="row2 row">
          <h2>Get Started Guide</h2>
          <p>
            A structured guide to resources that will help you start learning
            CSS Flexbox.
          </p>
        </div>
        <div className="row3 row">
          <div className="row3-left">
            <h2>The Examples</h2>
            <p>
              Small examples of the CSS Flexbox Layout specification. Each
              demonstrates a feature of the specification. Includes new Subgrid
              examples!
            </p>
          </div>
          <div className="row3-right">
            <h3>Patterns</h3>
            <p>
              Grab & Go. A set of example patterns with fallbacks for older
              browsers.
            </p>
          </div>
        </div>
        <div className="row4 row">row 4</div>
        <div className="row5 row">row 5</div>
        <div className="row6 row">row 6</div>
      </div>
    </div>
  );
};

export default Main;
