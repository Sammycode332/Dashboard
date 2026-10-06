import { useUserStore } from '../store/useUserStore'

const ZustandNameDisplay = () => {
    const name = useUserStore((state)=> state.name)
     return (
    <div>
      Zustand Name: {name}
    </div>
  )
}

export default ZustandNameDisplay