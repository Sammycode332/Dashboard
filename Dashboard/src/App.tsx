import DashboardLayout from './components/DashboardLayout'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Login from './components/Login'
import UserPage from './components/UserPage'
import UserProfile from './components/UserProfile'
import JotaiNameDisplay from './components/JotaiNameDisplay'
import JotaiNameChanger from './components/JotaiNameChanger'
import ZustandNameChanger from './components/ZustandNameChanger'
import ZustandNameDisplay from './components/ZustandNameDisplay'
import { Route,Routes } from 'react-router-dom'
import DashboardHome from './components/DashboardHome'
import Analytics from './components/Analytics'
import Settings from './components/Settings'
const App = () => {
  return (
    
    <div>
     <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
   </Routes>
      {/* <Sidebar title = "My Awesome Dashboard" username = "Samuel"/>
      <Navbar>
        <UserProfile />
      </Navbar>
      <JotaiNameDisplay />
      <JotaiNameChanger/>
      <ZustandNameDisplay />
      <ZustandNameChanger />
      <Login /> */}

    </div>
  )
}

export default App