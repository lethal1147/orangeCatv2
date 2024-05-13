import "./App.css";
import { AuthenRoutes, UnAuthenRoute } from "./routes";
import { useAuthStore } from "./stores";

function App() {
  const { isLoggedIn } = useAuthStore();
  return isLoggedIn ? <AuthenRoutes /> : <UnAuthenRoute />;
}

export default App;
