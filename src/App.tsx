import "./App.css";
import { AuthenRoutes, UnAuthenRoute } from "./routes";
import { useAuthStore } from "./stores";

function App() {
  const { isLoggedIn } = useAuthStore();
  console.log(isLoggedIn);
  return isLoggedIn ? <AuthenRoutes /> : <UnAuthenRoute />;
}

export default App;
