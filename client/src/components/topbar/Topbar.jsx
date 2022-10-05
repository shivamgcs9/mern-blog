import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const [open, setOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  const handleSearchIcon = (e) => {
    setOpen(!open);
  };

  const handleSearch = () => {};

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && (
            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            {user.profilePic ? (
              <img className="topImg" src={PF + user.profilePic} alt="" />
            ) : (
              <img
                className="topImg"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt=""
              />
            )}
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i
          className="topSearchIcon fas fa-search"
          onClick={handleSearchIcon}
        ></i>

        {open && <input type="text" onClick={handleSearch} />}
      </div>
    </div>
  );
}
