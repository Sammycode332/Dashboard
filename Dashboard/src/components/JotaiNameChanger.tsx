import { useSetAtom } from 'jotai'
import { nameAtom } from '../atoms/userAtoms'

const JotaiNameChanger = () => {
    const setName = useSetAtom(nameAtom)
    return (
  <button onClick={() => setName("Samuel Joe")}>
    Change Jotai Name
  </button>
    )
}

export default JotaiNameChanger