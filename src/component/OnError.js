import React from "react";
import { Link } from "react-router-dom";
const ErrorComp = () => {
  return (
    <>
      <h2 className="Home"> Oh No! ON ERROR</h2>
      <Link to={"/"}>Go back home</Link>
    </>
  );
};

export default ErrorComp;
