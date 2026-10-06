import { useState } from "react"
type sidebarProps =  {
  title: string
  username: string
}

const Sidebar = ({ title,username }:sidebarProps) => {

const [sidebarOpen, setSidebarOpen] = useState(true)
const [notifications, setNotifications] = useState(0)
const menuItems = [
  { id: 1, name: "Home" },
  { id: 2, name: "Users" },
  { id: 3, name: "Analytics" },
  { id: 4, name: "Settings" },
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
        <p key = {item.id}>{item.name}</p>
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