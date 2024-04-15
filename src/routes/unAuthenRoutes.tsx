import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage, LoginPage } from "@/views";

export default function UnAuthenRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
