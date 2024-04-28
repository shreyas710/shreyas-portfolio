/* eslint-disable react/no-unknown-property */
import {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader.jsx';

// eslint-disable-next-line react/prop-types
const Computers = () => {
    const computer = useGLTF('./space_station/scene.gltf')
    return (
        <mesh>
            <pointLight power={1000} intensity={1000}/>
            <primitive object={computer.scene} scale={0.45}
                       position={[0, 0, 10]}
                       rotation={[0, 0, 0]}/>
        </mesh>
    )
}

const ComputersCanvas = () => {
    const [rotate, setRotate] = useState(true);
    useEffect(() => {

        setTimeout(() => {
            setRotate(false);
        }, 10000)
    }, [])
    return (
        <div className={`w-full h-full absolute inset-0 z-[-1]`}>
            <Canvas frameloop={`demand`} shadows camera={{fov: 25, near: 0.1, far: 200, position: [20, 3, 5]}}
                    gl={{preserveDrawingBuffer: true}}>
                <Suspense fallback={<CanvasLoader/>}>
                    <OrbitControls autoRotate={rotate} enableZoom={false}/>
                    <Computers/>
                </Suspense>
                <Preload all/>
            </Canvas>
        </div>
    )
}
export default ComputersCanvas