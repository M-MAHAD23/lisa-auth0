import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginButton />} />
        <Route path="/profile" element={
          // Protect Profile route (optional)
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />
      </Routes>
    </Router>
  );
}

// Optional: Component to protect Profile route
function RequireAuth({ children }) {
  // Implement your authentication logic here
  // (e.g., check for logged-in user state)
  const isAuthenticated = true; // Replace with your logic

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default App;
