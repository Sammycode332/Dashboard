import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Login from './components/Login'
import UserPage from './components/UserPage'
import UserProfile from './components/UserProfile'
import JotaiNameDisplay from './components/JotaiNameDisplay'
import JotaiNameChanger from './components/JotaiNameChanger'
import ZustandNameChanger from './components/ZustandNameChanger'
import ZustandNameDisplay from './components/ZustandNameDisplay'
const App = () => {
  return (
    <div>
      <Sidebar title = "My Awesome Dashboard" username = "Samuel"/>
      <Navbar>
        <UserProfile />
      </Navbar>
      <JotaiNameDisplay />
      <JotaiNameChanger/>
      <ZustandNameDisplay />
      <ZustandNameChanger />
      <Login />
      <UserPage />
    </div>
  )
}

export default App