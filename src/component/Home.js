import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const HomePage = ({ createConextAPI }) => {
  let val = useContext(createConextAPI);
  return (
    <div className="Home">
      <h2> Welocme Home Page</h2>
      <button> go back to Home Mr.{val}</button>
      <Link to={"/"}>Go back home</Link>
    </div>
  );
};
