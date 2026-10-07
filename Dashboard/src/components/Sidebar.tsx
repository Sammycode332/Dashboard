import { useState } from "react";
import { Link } from "react-router-dom";
type sidebarProps =  {
  title: string
  username: string
}

const Sidebar = ({ title,username }:sidebarProps) => {

const [sidebarOpen, setSidebarOpen] = useState(true)
const [notifications, setNotifications] = useState(0)
const menuItems = [
  { id: 1, name: "Home", path: "/dashboard" },
  { id: 2, name: "Users", path: "/users" },
  { id: 3, name: "Analytics", path: "/analytics" },
  { id: 4, name: "Settings", path: "/settings" },
]
  
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
      {menuItems.map((item) =>(
        <Link to = {item.path} key = {item.id}>{item.name}</Link>
      ))}
        </div>
      )}
      <p>Notification: {notifications}</p>
      <button onClick={()=>setNotifications(prev => prev+1)}>Add notifications</button>
    </div>
   </>
  )
}

export default Sidebar