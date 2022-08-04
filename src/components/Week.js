import React from "react";

function Week(){
  const day1 = "Sunday";
  const day7 = "Saturday"
  return (
    <React.Fragment>
      <h3>Weekly Schedule:</h3>
      <h3>{day1} through {day7}</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Week;