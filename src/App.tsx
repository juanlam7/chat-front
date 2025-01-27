import { useAuthContext } from "@/context/AuthContext";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import SignUp from "@/pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import useInitApp from "./hooks/useInitApp";
import { BigLoading } from "./components/BigLoading";

function App() {
  // development approach, the backend server must be turned on
  const { isLoading } = useInitApp();

  const { authUser } = useAuthContext();

  return (
    <div className="h-screen flex items-center justify-center">
      {isLoading ? (
        <BigLoading>
          <p className="mt-2">
            Development approach, the backend server must be turned on.
          </p>
        </BigLoading>
      ) : (
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
      )}
      <Toaster />
    </div>
  );
}

export default App;
