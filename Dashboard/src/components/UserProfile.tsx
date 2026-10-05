import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import { nameAtom } from '../atoms/userAtoms'
import { useAtom } from 'jotai'
const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user)
  const username = useContext(UserContext)
  const [name,setName] = useAtom(nameAtom)
  return (
    <div>
      
        <h2>UserProfile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Context Name: {username?.name}</p>
        <p>Jotai Name: {name}</p>
        <button onClick = {()=> username?.setName("Samuel Joe")} >Change Context name</button>
        <button onClick={() => setName("Samuel Joe")}>
          Change Jotai Name
        </button>
    </div>
  )
}

export default UserProfile