import { Navigate, Route, Routes } from "react-router-dom";
import {
  ActivityPage,
  DashboardPage,
  FeedPage,
  LeaderboardPage,
  ProfilePage,
} from "@/views";
import { AuthenLayout } from "@/layouts";

export default function AuthenRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route element={<AuthenLayout />}>
        <Route path="/home" element={<FeedPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Route>
    </Routes>
  );
}
