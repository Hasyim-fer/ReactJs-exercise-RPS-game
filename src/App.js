import {Route, Routes} from "react-router-dom";
import "./pages/style/Pages.css";
import "./layouts/style/Layout.css";
import "./components/style/Component.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import {ProfileProvider} from "./utils/ProfileContext";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path=""
        element={
          <ProfileProvider>
            <Navbar />
          </ProfileProvider>
        }
      >
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="/*"
        element={
          <div>
            <h1>
              <center>Page Not Yet Available</center>
            </h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
