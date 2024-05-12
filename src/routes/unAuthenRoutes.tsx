import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage, LoginPage, RegisterPage } from "@/views";

export default function UnAuthenRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
