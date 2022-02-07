import React from 'react';
import Marquee from 'react-fast-marquee';
import {scores} from '../json/matchScores'

const scoreSelection = () => {
  let pickedScores = [];
  while (pickedScores.length < 10) {
    let randomGame = Math.floor(Math.random()*scores.length);
    pickedScores.push(scores[randomGame]);    
  }
  return pickedScores;
};

const scoreArray = scoreSelection();


const TickerItem = ({scores}) => {
          return <>
            {scoreArray.map(score => (<div style={{margin:0, padding:"5px 15px"}} className="score" key={score.match_id}>
              <span className='scoreName'>{score.winner_name} d. {score.loser_name}:</span> {score.match_score_tiebreaks}
            </div>))}
          </>
};



function UnderNavMarquee(props) {
  return    <>
                <Marquee><TickerItem /></Marquee>
            </>;
}

export default UnderNavMarquee;
