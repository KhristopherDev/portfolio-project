import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Computer3D() {
  return (
    <>
      <div className="grid w-[80%] grid-cols-2 content-center items-center place-self-center text-xs text-center">
        <div className="canvas-container w-[27vw] h-[27vw] col-span-1">
          <Canvas>
            <mesh>
              <boxGeometry args={[3.5, 3.5, 3.5]} />
              <meshPhongMaterial />
              <OrbitControls />
            </mesh>
            <ambientLight intensity={0} />
            <directionalLight position={[3, 5, 5]} intensity={1} color="red" />
          </Canvas>
          Laptop by Poly by Google [CC-BY] via Poly Pizza
        </div>
        <div className="">Hello World!</div>
      </div>
    </>
  );
}

export default Computer3D;
