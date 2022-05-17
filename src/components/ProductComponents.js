import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const ProductComponents = () => {
  const products = useSelector((state) => state);
  console.log(products);

  return (
    <div className="ui card">
      <div className="image">
        <img src="/images/avatar2/large/kristy.png" />
      </div>
      <div className="content">
        <a className="header">Kristy</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          Kristy is an art director living in New York.
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon" />
          22 Friends
        </a>
      </div>
    </div>
  );
};

export default ProductComponents;
