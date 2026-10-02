import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type ReactNode
} from "react"

type UserContextType = {
  name: string
  setName: Dispatch<SetStateAction<string>>
}

type UserProviderProps = {
  children: ReactNode
}

const UserContext = createContext<UserContextType | null>(null)

const UserProvider = ({ children }: UserProviderProps) => {
  const [name, setName] = useState("Samuel")

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext,UserProvider}