import "./main.css";
import items from "../../data/data";
import React, { useState } from "react";

const Main = () => {
  const [title, setTitle] = useState(items);
  const [date, setDate] = useState(items);
  const [likeNum, setLikeNum] = useState(0);

  function likeFunc() {
    setLikeNum(likeNum + 1);
  }

  function titleCor() {
    var newObj = { ...items };
    newObj[0].title = "새제목1";
    setTitle(newObj);
  }

  return (
    <div className="main">
      <div className="blackNav">
        <h3>Kintting nanymous</h3>
        <h5>저나니의 뜨개질 블로그</h5>
      </div>
      <div className="list">
        <h3>
          {items[0].title} <span onClick={likeFunc}>👍</span>
          <span>{likeNum}</span>
        </h3>
        <p>{items[0].date}</p>
        <button onClick={titleCor}>수정</button>
        <hr />
      </div>
    </div>
  );
};

export default Main;
