import React from "react";

function App(){
  const marketSchedule = "Sunday-Saturday";
  const availableProduce = "Varies by Season";
  return (
    <React.Fragment>
      <h1>Rosie's Organics</h1>
      <h3>Farmer's Market</h3>
      <h3>{marketSchedule}: Location and Produce {availableProduce}</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default App;