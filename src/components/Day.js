import React from "react";
import PropTypes from "prop-types";

function Day(props){
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <h4>{props.location}</h4>
      <p><em>Hours:</em> <b>{props.hours}</b></p>
      <p><em>Booth:</em> <b>{props.booth}</b></p>
    <hr/>
    </React.Fragment>
  );
}

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;