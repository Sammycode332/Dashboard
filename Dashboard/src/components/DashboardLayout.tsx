import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'



const DashboardLayout = () => {
  return (
    <div className = "flex min-h-screen bg-gray-100">
      <Sidebar title="My Awesome Dashboard" username="Samuel" />

      <main className= "min-w-0 flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout