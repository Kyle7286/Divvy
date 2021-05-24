/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function ProgressBar(props) {
  // const { bgcolor, completed,  } = props;
  console.log(`====== PROPS ==========`);
  console.log(props);
  console.log(props.points.points);


  const containerStyles = {
    height: 30,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    // margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${calculatePercentLeft()}%`,
    backgroundColor: '#6a1b9a',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  // Calculate the percent left until the next reward
  function calculatePercentLeft() {
    for (let i = 0; i < props.rewards.length; i++) {
      // If the current index req points is great than, then use that as the next goal/threshold
      if (props.rewards[i].req_points > props.points.points)
        return Math.floor((props.points.points / props.rewards[i].req_points) * 100);
    }
  }

  return (
    <>
      <div>
        <div className="" style={containerStyles}>
          <div className="p-1" style={fillerStyles}>
            <span className="p-2" style={labelStyles}>{`${calculatePercentLeft()}%`}</span>
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