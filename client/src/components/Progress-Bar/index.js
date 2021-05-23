/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function ProgressBar(props) {
  const { bgcolor, completed,  } = props;


  const containerStyles = {
    height: 30,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    // margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  function calculatePercentLeft() {
    return 71
  }

  return (
    <>
      <div>
        <div className="" style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${calculatePercentLeft()}%`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default ProgressBar;