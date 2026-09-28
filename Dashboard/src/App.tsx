import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Login from './components/Login'
import UserPage from './components/UserPage'

const App = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Login />
      <UserPage />
    </div>
  )
}

export default App