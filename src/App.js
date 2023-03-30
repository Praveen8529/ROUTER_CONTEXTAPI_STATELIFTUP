import "./styles.css";
import {
  useNavigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState, createContext } from "react";
import Menu from "./component/Menu";
import LoginPage from "./component/Login";
import ErrorComp from "./component/OnError";
import { HomePage } from "./component/Home";
import MultipleEventHandlers from "./component/MultipleEventListeners";
const createConextAPI = createContext();

export function App() {
  const [conext, setConext] = useState(null);
  const callToSetData = (data) => setConext(data);
  return (
    <Router>
      <Menu />
      <createConextAPI.Provider value={conext}>
        <div className="conent">
          <Routes>
            <Route
              exact
              path="/"
              element={<LoginPage liftUp={callToSetData} />}
            />
            <Route
              exact
              path="/Home"
              element={<HomePage createConextAPI={createConextAPI} />}
            />
            <Route
              exact
              path="/MultipleEventHandlers"
              element={<MultipleEventHandlers />}
            />
            <Route exact path="/err" element={<ErrorComp />} />
          </Routes>
        </div>
      </createConextAPI.Provider>
    </Router>
  );
}
