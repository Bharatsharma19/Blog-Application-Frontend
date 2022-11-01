import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:3001/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              <b>
                HOME
              </b>
            </Link>
          </li>
          <li className="topListItem">
            <a href="https://github.com/bharatsharma19" target="_blank" style={{ textDecoration: "none", color: "black" }}>
              <b>
                ABOUT
              </b>
            </a>
          </li>
          <li className="topListItem">
            <a href="https://github.com/bharatsharma19" target="_blank" style={{ textDecoration: "none", color: "black" }}>
              <b>
                CONTACT
              </b>
            </a>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              <b>
                WRITE
              </b>
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            <b>
              {user && "LOGOUT"}
            </b>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                <b><i>
                  LOGIN
                </i></b>
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                <b><i>
                  REGISTER
                </i></b>
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
