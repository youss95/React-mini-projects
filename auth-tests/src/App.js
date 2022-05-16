import { Switch, Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { AuthContextProvider } from "./store/auth-context";
const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {!isLoggedIn && <Route path="/auth" element={<AuthPage />}></Route>}

        <Route
          path={isLoggedIn ? "/profile" : "/auth"}
          element={<UserProfile />}
        ></Route>

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
