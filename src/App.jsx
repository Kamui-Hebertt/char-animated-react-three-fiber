

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function App() {


  return (
    <Canvas shadows camera={{ position: [50, 50,  10], fov: 20 }}>
 

    <Experience />
  </Canvas>
  )
}

export default App
