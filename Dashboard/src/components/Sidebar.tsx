import { useState } from "react"
type sidebarProps =  {
  title: string
  username: string
}

const Sidebar = ({ title,username }:sidebarProps) => {

const [sidebarOpen, setSidebarOpen] = useState(true)
const [notifications, setNotifications] = useState(0)

  
///* instead of doing props .title i destructured to only get the title from sidebar probs instead of letting sidebar collect the whole function of props */
  return (
    <>
   
    
    <div>
      <h1>{title}</h1>
      <p>Sidebar is open: {String(sidebarOpen)}</p>
      <button onClick={()=> setSidebarOpen(prev=> !prev)}> Close Sidebar</button>
      {sidebarOpen && (
        <div>
      <p>Welcome, {username}</p>
      <p>Home</p>
      <p>Users</p>
      <p>Analytics</p>
      <p>Settings</p>.
        </div>
      )}
      <p>Notification: {notifications}</p>
      <button onClick={()=>setNotifications(prev => prev+1)}>Add notifications</button>
    </div>
   </>
  )
}

export default Sidebar