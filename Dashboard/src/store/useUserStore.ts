import { create } from "zustand";

type UserStore = {
    name: string;
    email:string;
    isLoggedIn: boolean
    setName:(name: string)=> void
    setEmail: (email: string) => void
    login: (name: string, email: string) => void
    logout:()=>void
}
export const useUserStore = create<UserStore>((set) => ({
  name: "Samuel",
  email: "",
  isLoggedIn: false,

  setName: (name) => set({name}),
  setEmail: (email) => set({ email }),
  login: (name, email) => set({
    name,
    email,
    isLoggedIn: true,
  }),
  logout: () =>
    set({
      name: "",
      email: "",
      isLoggedIn: false,
    }),
}));