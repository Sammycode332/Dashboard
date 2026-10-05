
import { useAtomValue } from "jotai";

import { nameAtom } from "../atoms/userAtoms";


const JotaiNameDisplay = () => {
    const name = useAtomValue(nameAtom)
  return (
    <div>
      Jotai Name: {name}
    </div>
  )
}

export default JotaiNameDisplay
