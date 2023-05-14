/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./worldcup.css";
import p01 from "../../assets/ai.gif";
import p02 from "../../assets/asuna.gif";
import p03 from "../../assets/chisato.gif";
import p04 from "../../assets/eru.gif";
import p05 from "../../assets/evergarden.gif";
import p06 from "../../assets/hitori.gif";
import p07 from "../../assets/kosaki.gif";
import p08 from "../../assets/kubo.gif";
import p09 from "../../assets/makima.gif";
import p10 from "../../assets/marin.gif";
import p11 from "../../assets/megumi.gif";
import p12 from "../../assets/miki.gif";
import p13 from "../../assets/mikoto.gif";
import p14 from "../../assets/mirai.gif";
import p15 from "../../assets/rem.gif";
import p16 from "../../assets/yukino.gif";

export const WorldCup = () => {
  const candidate = [
    { id: 0, name: "호시노 아이", src: p01, score: 0 },
    { id: 1, name: "유우키 아스나", src: p02, score: 0 },
    { id: 2, name: "니시키기 치사토", src: p03, score: 0 },
    { id: 3, name: "치탄다 에루", src: p04, score: 0 },
    { id: 4, name: "바이올렛 에버가든", src: p05, score: 0 },
    { id: 5, name: "고토 히토리", src: p06, score: 0 },
    { id: 6, name: "오노데라 코사키", src: p07, score: 0 },
    { id: 7, name: "쿠보 나기사", src: p08, score: 0 },
    { id: 8, name: "마키마", src: p09, score: 0 },
    { id: 9, name: "키타가와 마린", src: p10, score: 0 },
    { id: 10, name: "카토 메구미", src: p11, score: 0 },
    { id: 11, name: "호시이 미키", src: p12, score: 0 },
    { id: 12, name: "미사카 미코토", src: p13, score: 0 },
    { id: 13, name: "쿠리야마 미라이", src: p14, score: 0 },
    { id: 14, name: "렘", src: p15, score: 0 },
    { id: 15, name: "유키노시타 유키노", src: p16, score: 0 },
  ];
  const [game, setGame] = useState([]);
  const [round, setRound] = useState(0);
  const [nextGame, setNextGame] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    setGame(
      candidate
        .map((c) => {
          return { id: c.id, name: c.name, src: c.src, order: Math.random() };
        })
        .sort((l, r) => {
          return l.order - r.order;
        })
    );
  }, []);

  useEffect(() => {
    if (game.length > 1 && round + 1 > game.length / 2) {
      setGame(nextGame);
      setNextGame([]);
      setRound(0);
    }
  }, [round]);

  useEffect(() => {
    if (selectedImg !== null) {
      const timer = setTimeout(() => {
        setSelectedImg(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedImg]);

  if (game.length === 1) {
    return (
      <div className="winner_container">
        <p style={{ fontSize: "30px" }}>우승</p>
        <Link to="/">
          <img src={game[0].src} alt="우승" className="img" />{" "}
        </Link>

        <p className="img_name">{game[0].name}</p>
      </div>
    );
  }
  if (game.length === 0 || round + 1 > game.length / 2)
    return <p>로딩중입니다</p>;

  const handleClick = (img, rankFunction) => {
    setSelectedImg(img.id);
    rankFunction();
    setTimeout(() => {
      setNextGame((prev) => prev.concat(img));
      setRound((round) => round + 1);
    }, 1500);
  };

  const rank = (array, distribute) => {
    const isDataExists = localStorage.getItem("myData") !== null;
    let myArray = [];
    if (isDataExists) {
      const serializedArray = localStorage.getItem("myData");
      myArray = JSON.parse(serializedArray);

      myArray.forEach((e) => {
        if (distribute === 0) {
          if (e.id === array[0].id) {
            e.score += 2;
          } else if (e.id === array[1].id) {
            e.score += 1;
          }
        } else if (distribute === 1) {
          if (e.id === array[1].id) {
            e.score += 2;
          } else if (e.id === array[0].id) {
            e.score += 1;
          }
        }
      });
      const temp = JSON.stringify(myArray);
      localStorage.setItem("myData", temp);
    } else {
      candidate.forEach((e) => {
        if (distribute === 0) {
          if (e.id === array[0].id) {
            e.score += 2;
          } else if (e.id === array[1].id) {
            e.score += 1;
          }
        } else if (distribute === 1) {
          if (e.id === array[1].id) {
            e.score += 2;
          } else if (e.id === array[0].id) {
            e.score += 1;
          }
        }
      });
      const temp = JSON.stringify(candidate);
      localStorage.setItem("myData", temp);
    }
  };

  return (
    <div className="game_container">
      <div className="round_text_container">
        <div>{game.length === 2 ? "결승" : game.length + "강"}</div>
        <p>
          이상형 월드컵 {round + 1} / {game.length / 2}{" "}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "800px",
        }}
      >
        <div className="img_container">
          <img
            src={game[round * 2].src}
            onClick={() =>
              handleClick(game[round * 2], () => {
                if (game.length === 2) {
                  rank([game[round * 2], game[round * 2 + 1]], 0);
                }
              })
            }
            alt="img1"
            className={`img ${
              selectedImg === game[round * 2].id ? "img_enlarge" : ""
            }`}
          />
          <div className="img_name">{game[round * 2].name}</div>
        </div>

        <div className="img_container">
          <img
            src={game[round * 2 + 1].src}
            onClick={() =>
              handleClick(game[round * 2 + 1], () => {
                if (game.length === 2) {
                  rank([game[round * 2], game[round * 2 + 1]], 1);
                }
              })
            }
            alt="img2"
            className={`img ${
              selectedImg === game[round * 2 + 1].id ? "img_enlarge" : ""
            }`}
          />
          <div className="img_name">{game[round * 2 + 1].name}</div>
        </div>
      </div>
    </div>
  );
};
