import React from "react";
import "./ranking.css";

export const Ranking = () => {
  const isDataExists = localStorage.getItem("myData") !== null;
  let myArray = []
  if (isDataExists) {
    const serializedArray = localStorage.getItem("myData");
    myArray= JSON.parse(serializedArray);

  } else {
    return (
      <div className="no_game">
        <p1>아직 한번도 게임을 진행하지 않았습니다.</p1>
      </div>
    );
  }
  console.log(myArray);


  return (
    <div className="ranking">
      {myArray
        .sort((l, r) => {
          return r.score - l.score;
        })
        .map((e) => {
          return (
            <div className="ranking_contents">
              <img src={e.src} alt="img" className="ranking_img" />
              <div className="ranking_name">{e.name}</div>
              <div className="ranking_score">{e.score}</div>
            </div>
          );
        })}
    </div>
  );
};
