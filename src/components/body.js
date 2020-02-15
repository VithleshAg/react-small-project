import React from "react";

export default props => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
    <p className="App-intro">{props.myFunction(567, 78)}</p>
  </div>
);

export const Body2 = props => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
    <p className="App-intro">{props.myFunction(567, 78)}</p>
  </div>
);

export const Body3 = props => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
    <p className="App-intro">{props.myFunction(567, 78)}</p>
  </div>
);
