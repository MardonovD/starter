import React from "react";
import "../App.css";
const Header = () => {
  return (
    <div className="ui secondary  menu " id="bacc">
      <div className="ui container " >
        <a className="active item">Home</a>
        <a className="item">Messages</a>
        <a className="item">Friends</a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon" />
            </div>
          </div>
          <a className="ui item">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
