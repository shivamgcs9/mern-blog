import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Sidebar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(`/categories`);
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {user?.profilePic ? (
          <img className="topImg" src={PF + user.profilePic} alt="" />
        ) : (
          <img
            className="topImg"
            src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113__340.png"
            alt=""
          />
        )}
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">
              <Link className="link" to={`/posts?cat=${c.name}`}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
