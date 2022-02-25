import React from "react";
import { Link } from "react-router-dom";
import "./SubHeader.css";

const SubHeader = () => {
  return (
    <div className="subheader">
      <div className="subheader-container">
        <div className="cat-list">
          <Link to="/" className="link">Home</Link>
          {/* <p>Mouse</p>
          <p>Graphic cards</p>
          <p>CPU</p>
          <p>Motherboard</p>
          <p>Monitors</p> */}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
