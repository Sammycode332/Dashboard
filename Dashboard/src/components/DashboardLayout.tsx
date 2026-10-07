import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'



const DashboardLayout = () => {
  return (
    <div>
      <Sidebar title="My Awesome Dashboard" username="Samuel" />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout