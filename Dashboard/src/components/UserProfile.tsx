import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user)
  const username = useContext(UserContext)
  return (
    <div>
        <h2>UserProfile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Context Name: {username?.name}</p>
        <button onClick = {()=> username?.setName("Samuel Joe")} >Change Context name</button>
    </div>
  )
}

export default UserProfile