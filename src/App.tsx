import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"
import Auth from "./routes/login";
import Home from "./routes/index";

export function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />} />
         </Routes>
      </AuthProvider>
  )
}
