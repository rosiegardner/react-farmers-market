import React from "react";
import Header from "./Header.js";

function App(){
  const marketSchedule = "Sunday-Saturday";
  const availableProduce = "Varies by Season";
  return (
    <React.Fragment>
      <Header />
      <h3>Farmer's Market</h3>
      <h3>{marketSchedule}: Location and Produce {availableProduce}</h3>
      <p><em>Firebase entries not saving!</em></p>
      {/** this is a comment in JSX - We will always use {curlyBraces} for any JS expression in JSX. */}
      <hr/>
    </React.Fragment>
  );
}

export default App;