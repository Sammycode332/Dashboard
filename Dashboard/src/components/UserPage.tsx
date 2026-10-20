import {useState,useEffect,useReducer} from 'react'

type User = {
    id: number
    name: string
    email: string
  }
const UserPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  type EditState = {
  editingUserId: number | null
  draftName:string;
  draftEmail:string;
  }
  
  type EditAction =
  | { type: "startEdit"; payload: User }
  | { type: "changeName"; payload: string }
  | { type: "changeEmail"; payload: string }
  | { type: "cancelEdit" }

  const initialEditState: EditState = {
    editingUserId: null,
    draftName:"",
    draftEmail: ""
  }
  const editReducer = (state: EditState, action: EditAction): EditState => {
  if (action.type === "startEdit") {
    return {
      editingUserId: action.payload.id,
      draftName: action.payload.name,
      draftEmail:action.payload.email,

    }
  }

  if (action.type === "changeName") {
  return { ...state, draftName: action.payload }
   }
   
   if (action.type === "changeEmail") {
     return { ...state, draftEmail: action.payload }
   }
   
   if (action.type === "cancelEdit") {
     return initialEditState
   }
   
     return state
   }
const [editState, reducerDispatch] = useReducer(
  editReducer,
  initialEditState
)
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
    <div className='space-y-6'>
      <div>
       <h1 className="text-2xl font-bold tracking-tight text-gray-900">
         Users
       </h1>
       <p className="mt-1 text-sm text-gray-500">
         Manage and view all registered users.
       </p>
      </div>
      {!loading && !error && users.length > 0 && (
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
        {users.map((item) => (
        <div key={item.id} className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm  transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
            {item.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()}
         </div>
        <div className="min-w-0 flex-1">
           {editState.editingUserId === item.id ? (
             <div className="space-y-2">
               <input
                 value={editState.draftName}
                 onChange={(event) =>
                   reducerDispatch({
                     type: "changeName",
                     payload: event.target.value
                   })
                 }
                 className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                 placeholder="Name"
               />
         
               <input
                 value={editState.draftEmail}
                 onChange={(event) =>
                   reducerDispatch({
                     type: "changeEmail",
                     payload: event.target.value
                   })
                 }
                 className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                 placeholder="Email"
               />
             </div>
           ) : (
             <>
               <h2 className="truncate font-semibold text-gray-900">
                 {item.name}
               </h2>
         
               <p className="truncate text-sm text-gray-500">
                 {item.email}
               </p>
             </>
           )}
         </div>
          {editState.editingUserId === item.id ? (
     <div className="flex shrink-0 flex-col gap-2">
       <button
         onClick={() => {
           setUsers((currentUsers) =>
             currentUsers.map((user) =>
               user.id === item.id
                 ? {
                     ...user,
                     name: editState.draftName,
                     email: editState.draftEmail
                   }
                 : user
             )
           )
   
           reducerDispatch({ type: "cancelEdit" })
         }}
         className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
       >
         Save
       </button>

    <button
      onClick={() =>
        reducerDispatch({ type: "cancelEdit" })
      }
      className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      Cancel
    </button>
  </div>
) : (
  <button
    onClick={() =>
      reducerDispatch({ type: "startEdit", payload: item })
    }
    className="shrink-0 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
  >
    Edit
  </button>
)}
        </div>
      ))}
      </div>
      )}
      {!loading && !error && users.length === 0 && (
     <p className="rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-500">
       No users found.
      </p>
       )}
        {loading && (
         <p className="rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-500">
           Loading users...
         </p>
       )}

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
   
  )
}

export default UserPage