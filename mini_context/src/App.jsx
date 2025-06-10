import Login from "./components/Login"
import UserContextProvider from "./context/userContextProvider"


function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
