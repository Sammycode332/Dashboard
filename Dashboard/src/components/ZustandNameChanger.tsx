import { useUserStore } from '../store/useUserStore'

const ZustandNameChanger = () => {
    const setName = useUserStore((state) => state.setName)
    return(
      <button onClick={() => setName("Samuel Joe")}>
        Change Zustand Name
      </button>
        )
}

export default ZustandNameChanger