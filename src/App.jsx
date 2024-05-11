import { useEffect } from "react"
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import Profile from "./components/Profile"
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  }


  return (
    <>
      {
        isAuthenticated ?
        <>
          <LogoutButton />
          <Profile />
        </>
        : handleLogin()
      }
    </>
  )
}

export default App
