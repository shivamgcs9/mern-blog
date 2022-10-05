import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  console.log(post);
  return (
    <div className="post">
      {post.photo ? (
        <img className="postImg" src={PF + post.photo} alt="" />
      ) : (
        <img
          className="postImg"
          src="https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664__340.jpg"
          alt=""
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">
              <Link className="link" to={`/posts?cat=${c}`}>
                {c}
              </Link>
            </span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
