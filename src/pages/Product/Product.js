import React from "react";
import "./product.css";
function Main() {
  const LINKS = ["Learn more", "buy now", "See more"];
  let items = LINKS?.map((value, index) => {
    return (
      <button key={index} className="btn">
        {value}
      </button>
    );
  });
  return <div>{items}</div>;
}
export default Main;
