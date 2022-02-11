import React from "react";
// import { scores } from "../json/matchScores";

const MatchCard = (props) => {
  const { loser_name, match_score_tiebreaks, winner_name } = props;
  return (
    <>
      <div className="matchCardContainer">
        <div className="namesContainer">
          <div className="winnerName">{winner_name}</div>
          <div className="loserName">{loser_name}</div>
        </div>
        <div className="scoreContainer">{match_score_tiebreaks}</div>
      </div>
    </>
  );
};

export default MatchCard;
