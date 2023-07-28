

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function App() {


  return (
    <Canvas shadows camera={{ position: [40, 50, 10], fov: 30 }}>
 

    <Experience />
  </Canvas>
  )
}

export default App
