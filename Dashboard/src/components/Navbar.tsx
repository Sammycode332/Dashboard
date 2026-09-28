import UserProfile from './UserProfile'
import type {ReactNode } from 'react'

type NavbarProps = {
  children: ReactNode
}
const Navbar = ({children}: NavbarProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Navbar