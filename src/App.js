import {Route, Routes} from "react-router-dom";
import "./pages/style/Pages.css";
import "./layouts/style/Layout.css";
import "./components/style/Component.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Button from "./components/fragments/Button";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <center>
            <h1>homepage belum jadi coegg :v</h1>
            <Button title="BACK" target={"/login"} />
          </center>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <center>
            <h1>forgot password page juga belum jadi :v</h1>
            <Button title="BACK" target={"/login"} />
          </center>
        }
      />
    </Routes>
  );
}

export default App;
