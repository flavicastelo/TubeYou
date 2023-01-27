import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "../utils/PrivateRoute";
import RegisterVideoPage from "./pages/RegisterVideoPage";
import VideosPage from "./pages/VideosPage";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/list" element={<VideosPage />} />
        <Route path="/videos" element={<PrivateRoute redirectTo="/login"><RegisterVideoPage/></PrivateRoute>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </Router>
  );
}