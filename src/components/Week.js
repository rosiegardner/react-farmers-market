import React from "react";

function Week(){
  return (
    <React.Fragment>
      <h3>Weekly Schedule:</h3>
      <h3>{props.day} @ {props.location}</h3>
      <p><em>You can find me at booth {props.booth} from {props.hours}!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Week;