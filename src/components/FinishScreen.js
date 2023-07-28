import React from "react";

function FinishScreen({ points, maxPossiblePoints, heighscore, dispatch }) {
  const percentege = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentege === 100) emoji = "🥇";
  if (percentege >= 80 && percentege < 100) emoji = "🎉";
  if (percentege >= 50 && percentege < 80) emoji = "😆";
  if (percentege >= 0 && percentege < 50) emoji = "🤔";
  if (percentege === 0) emoji = "🤦";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentege)}%)
      </p>
      <p className="highscore">(Highscore: {heighscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
