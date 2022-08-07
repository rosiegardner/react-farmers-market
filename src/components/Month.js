import React from "react";
import PropTypes from "prop-types";

function Month(props) {
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <strong>Available Produce: </strong>
      <ul>
        <li>{props.selection.join(", ")}</li>
      </ul>
      <hr />
    </React.Fragment>
  );
}

Month.propTypes = {
  month: PropTypes.string,
};

export default Month;