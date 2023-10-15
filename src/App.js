import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/mesh0.glb");
  return <primitive object={scene} {...props} />
}

function App() {
  return (
    <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute"}}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default App;

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF, Stage, PresentationControls } from '@react-three/drei';

// function Model(props) {
//   const { scene } = useGLTF('/mesh0.glb');

//   return (
//     <primitive object={scene} {...props}>
//       <mesh 
//         onClick={(e) => console.log('Clicked on mesh', e.object)}
//       >
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color="hotpink" />
//       </mesh>
//     </primitive>
//   );
// }

// function App() {
//   return (
//     <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: 'absolute' }}>
//       <color attach="background" args={['#101010']} />

//       <OrbitControls 
//         enableZoom={true}
//         enablePan={true}
//         enableRotate={true} // cho phép xoay 360 độ
//       />

//       <PresentationControls
//         global
//         rotation={[0, 0, 0]}
//         polar={[-0.1, Math.PI / 4]}
//         azimuth={[-1, 1]}  
//       >

//         <Stage environment={'sunset'}>
//           <Model scale={0.01} />
//         </Stage>
        
//       </PresentationControls>

//     </Canvas>
//   );
// }

