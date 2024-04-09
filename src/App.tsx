import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./views";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
