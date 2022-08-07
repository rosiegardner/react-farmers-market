import React from "react";
import Header from "./Header";

function App(){
  const marketSchedule = "Sunday-Saturday";
  const availableProduce = "Varies by Season";
  return (
    <React.Fragment>
      <Header />
      <h1>Rosie's Organics</h1>
      <h3>{marketSchedule}: Location and Produce {availableProduce}</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default App;