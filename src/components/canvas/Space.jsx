/* eslint-disable react/no-unknown-property */
import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader.jsx';

// eslint-disable-next-line react/prop-types

const Space = () => {
    const computer = useGLTF('./need_some_space/scene.gltf')
    return (
        <mesh>
            <primitive object={computer.scene} scale={20}
                       position={[-10, -15, 0]}/>
        </mesh>
    )
}

const SpaceCanvas = () => {
    return (
        <Canvas frameloop={`demand`} camera={{position: [20, 3, 5], fov: 25}}
                gl={{preserveDrawingBuffer: true}}>
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls autoRotate={true} enableZoom={false} enableRotate={true}/>
                <Space/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}
export default SpaceCanvas