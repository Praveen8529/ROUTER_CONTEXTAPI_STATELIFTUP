import "./styles.css";
import {
  useNavigate,
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { useState, useContext, createContext } from "react";
import { UseValidation } from "./useValidation";
const createConextAPI = createContext();

export function App() {
  const [conext, setConext] = useState("");
  const callToSetData = (data) => {
    setConext(data);
  };
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Login</Link> |<Link to={"/Home"}>Home</Link>
          </li>
        </ul>
      </div>
      <createConextAPI.Provider value={conext}>
        <div className="conent">
          <Routes>
            <Route
              exact
              path="/"
              element={<LoginPage liftUp={callToSetData} />}
            />
            <Route exact path="/Home" element={<HomePage />} />
            <Route exact path="/err" element={<ErrorComp />} />
          </Routes>
        </div>
      </createConextAPI.Provider>
    </Router>
  );
}

export const LoginPage = ({ liftUp }) => {
  const [data, setData] = useState({ useName: "", pwd: "", error: "" });
  const navigate = useNavigate();

  const handelInputs = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handelSubmit = () => {
    const g = UseValidation(data);
    console.log(g);
    if (data.useName.length === 0 || data.pwd.length === 0) navigate("/err");
    else {
      navigate("/Home");
      liftUp(data.useName);
    }
  };
  return (
    <form onSubmit={handelSubmit}>
      <div className="Login">
        User Name:{" "}
        <input
          id="useName"
          value={data.useName}
          type="text"
          onChange={handelInputs}
        />
        <br />
        Password :{" "}
        <input
          id="pwd"
          value={data.pwd}
          type="password"
          onChange={handelInputs}
        />
        <div>
          <input type="submit" value="submit" />
        </div>
        {data.error}
      </div>
    </form>
  );
};

export const HomePage = () => {
  const navigate = useNavigate();
  let val = useContext(createConextAPI);

  // const handelHome = () => {
  //   navigate("/");
  // };
  return (
    <div className="Home">
      <div> Welocme Home Page</div>
      <button> go back to Home Mr.{val}</button>
      <Link to={"/"}>Go back home</Link>
    </div>
  );
};
export const ErrorComp = () => {
  return (
    <>
      <div> on Error Page</div>
      <Link to={"/"}>Go back home</Link>
    </>
  );
};
