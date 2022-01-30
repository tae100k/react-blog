import { useState } from "react/cjs/react.development";
import "./newPost.css";

function NewPost() {
  const [curPost, setCurPost] = useState({ title: "", date: "", desc: "" });
  let curTitle;
  let curDate;
  let curDesc;
  function infoToList() {
    let newTemp = {
      title: curTitle,
      date: curDate,
      desc: curDesc,
    };
    setCurPost({ ...curPost, ...newTemp });
  }

  return (
    <div>
      <div className="newPostWrapper">
        <div className="inputWrapper">
          <label htmlFor="newTitle">제목</label>
          <input
            type="text"
            id="newTitle"
            placeholder="제목을 입력해주세요"
            onChange={(e) => {
              curTitle = e.target.value;
            }}
          />
          {curTitle}
        </div>
        <div>
          <label htmlFor="newDate">날짜</label>
          <input
            type="date"
            id="newDate"
            placeholder="날짜를 입력해주세요"
            onChange={(e) => {
              curDate = e.target.value;
            }}
          />
        </div>
        <div>
          <label htmlFor="newDesc">내용</label>
          <input
            type="text"
            id="newDesc"
            placeholder="내용을 입력해주세요"
            onChange={(e) => {
              curDesc = e.target.value;
            }}
          />
          {curDesc}
        </div>
      </div>
      <button onClick={infoToList}>저장하기</button>
    </div>
  );
}

export default NewPost;
