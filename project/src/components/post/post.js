import "./post.css";
import Modal from "../modal/modal";
import React, { useState } from "react";

function Post(props) {
  const [heart, setHeart] = useState(props.item.like);
  const [isClicked, setIsClicked] = useState(false);

  function likeIncrease() {
    setHeart(heart + 1);
  }

  function modalCheck() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <div className="list">
        <div className="titleContainer">
          <h3>{props.item.title}</h3>
          <p>{props.item.date}</p>
          <span onClick={likeIncrease}>👍</span>
          <span>{heart}</span>
        </div>
        <div className="photoContainer">
          <button onClick={modalCheck}>자세히 보기</button>
          {/* <img alt={props.item.title} src={props.item.src} /> */}
        </div>
      </div>
      <hr />
      <Modal
        isClicked={isClicked}
        title={props.item.title}
        date={props.item.date}
        src={props.item.src}
        desc={props.item.desc}
      />
    </>
  );
}

export default Post;
