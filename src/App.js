import {Route, Routes} from "react-router-dom";
import "./pages/style/Pages.css";
import "./layouts/style/Layout.css";
import "./components/style/Component.css";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
