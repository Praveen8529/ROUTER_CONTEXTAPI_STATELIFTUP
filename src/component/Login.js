import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFocus } from "../hooks/useFocus";
import { useValidation } from "../hooks/useValidation";

const LoginPage = ({ liftUp }) => {
  const [data, setData] = useState({ useName: "", pwd: "", error: "" });
  const navigate = useNavigate();

  const inputRef = useFocus();
  const handelInputs = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handelSubmit = () => {
    const validate = useValidation(data);
    if (data.useName.length === 0 || data.pwd.length === 0) navigate("/err");
    else {
      navigate("/Home");
      liftUp(data.useName);
    }
  };
  return (
    <form onSubmit={handelSubmit}>
      <div className="Login">
        <span> User Name:</span>
        <input
          id="useName"
          ref={inputRef}
          value={data.useName}
          type="text"
          onChange={handelInputs}
        />
        <span> Password :</span>
        <input
          id="pwd"
          value={data.pwd}
          type="password"
          onChange={handelInputs}
        />
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
        {data.error}
      </div>
    </form>
  );
};

export default LoginPage;
