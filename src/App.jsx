

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import  Interface  from '../src/components/Interface';

function App() {


  return (
    <>
    <Canvas shadows camera={{ position: [50, 50, 10], fov: 20 }}>


      <Experience />
    </Canvas>
    <Interface />
    </>
  )
}

export default App
