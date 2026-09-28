import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user)
  return (
    <div>
        <h2>UserProfile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserProfile