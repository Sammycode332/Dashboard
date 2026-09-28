
type sidebarProps =  {
  title: string
  username: string
}

const Sidebar = ({ title,username }:sidebarProps) => {

///* instead of doing props .title i destructured to only get the title from sidebar probs instead of letting sidebar collect the whole function of props */
  return (
    
    <div>
      <h1>{title}</h1>
      <p>Welcome, {username}</p>
      <p>Home</p>
      <p>Users</p>
      <p>Analytics</p>
      <p>Settings</p>
    </div>
    
  )
}

export default Sidebar