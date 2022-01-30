import "./main.css";
import items from "../../data/data";
import likes from "../../data/likes";
import React, { useState } from "react";
import styled from "styled-components";

const Main = () => {
  const [posts, setPosts] = useState(likes);
  function likeIncrease(heart) {
    setPosts(heart + 1);
    console.log(heart);
  }
  return (
    <div className="main">
      <div className="blackNav">
        <h3>Kintting nanymous</h3>
        <h5>저나니의 뜨개질 블로그</h5>
      </div>

      {items.map((item, idx) => {
        return <Post item={item} idx={idx} />;
      })}
    </div>
  );
};

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
          <img alt={props.item.title} src={props.item.src} />
        </div>
      </div>
      <hr />
      <Modal isClicked={isClicked}>
        <div className="info">
          <h3>{props.item.title}</h3>
          <p>{props.item.date}</p>
          <p>{props.item.desc}</p>
        </div>
        <div className="photo">
          <img alt={props.item.title} src={props.item.src} />
        </div>
      </Modal>
    </>
  );
}

const Modal = styled.div`
  display: ${(props) => (props.isClicked ? "flex" : "none")};
  border: 1px solid lightgrey;
  margin: 12px 32px;
  padding: 25px;
  flex-direction: row;
  justify-content: space-between;
  max-width: 700px;
`;

export default Main;
