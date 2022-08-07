import React from "react";
import Seasonal from "./Seasonal";
import WeekDays from "./WeekDays";

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      marketSchedule: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Seasonal />;
      buttonText = "Return to Schedule";
    } else {
      currentlyVisibleState = <WeekDays 
      marketSchedule={this.state.marketSchedule} />;
      buttonText = "View Seasonal Produce";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MarketControl;