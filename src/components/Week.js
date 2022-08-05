import React from "react";
import PropTypes from "prop-types";

function Week(props){
  return (
    <React.Fragment>
      <h3>Weekly Schedule:</h3>
      <h3>{props.day} @ {props.location}</h3>
      <p><em>You can find me at booth {props.booth} from {props.hours}!</em></p>
      <hr/>
    </React.Fragment>
  );
}

Week.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};
export default Week;