import { useEffect } from "react"
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import Profile from "./components/Profile"
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    loginWithRedirect()
  })
  return (
    <>
      {/* <LoginButton /> */}
      <LogoutButton />
      <Profile />
    </>
  )
}

export default App
