import {useState,useEffect} from 'react'

type User = {
    id: number
    name: string
    email: string
  }
const UserPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if(!response.ok){
          throw new Error("Failed to fetch users")
        }
      return response.json()})
      .then((data) => {
        setUsers(data)
        setLoading(false)

      })
      .catch(() => {
        setError("Failed to load users")
        setLoading(false)
      })
        }, [])

  return (
    <div>
      <div>UserPage</div>
      {users.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
       {loading && <p>Loading...</p>}
       {error && <p>{error}</p>}
    </div>
   
  )
}

export default UserPage