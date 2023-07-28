import { OrbitControls} from "@react-three/drei";
import { Medea } from "./Medea";
import { CharWoman } from "./woman";
const Experience = () => {
  return (
    <>
    <OrbitControls />
    <ambientLight intensity={2} />

    <CharWoman /> 
    
   
    {/* <Medea scale={1}
          position-y={-5} /> */}
    {/* <mesh>
    <boxGeometry />
    <meshNormalMaterial />
    </mesh> */}

    </>
  )
}

export default Experience;