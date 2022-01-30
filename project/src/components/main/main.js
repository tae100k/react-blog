import "./main.css";
import items from "../../data/data";
import Post from "../post/post";
import NewPost from "components/new-post/newPost";
const Main = () => {
  return (
    <div className="main">
      <div className="blackNav">
        <h3>Kintting nanymous</h3>
        <h5>저나니의 뜨개질 일기장</h5>
      </div>

      {items.map((item, idx) => {
        return <Post item={item} idx={idx} key={idx} />;
      })}
      {/* <NewPost /> */}
    </div>
  );
};

export default Main;
