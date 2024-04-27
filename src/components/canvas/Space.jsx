/* eslint-disable react/no-unknown-property */
import {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader.jsx';

// eslint-disable-next-line react/prop-types

const Space = () => {
    const computer = useGLTF('./need_some_space/scene.gltf')
    return (
        <mesh>
            <primitive object={computer.scene} scale={5}
                       position={[0, 0, 1]}/>
        </mesh>
    )
}

const SpaceCanvas = () => {
    const [rotate, setRotate] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setRotate(false);
        }, 3000)
    })

    return (
        <div className={`w-full h-full absolute inset-0 z-[-1]`}>
            <Canvas frameloop={`demand`} camera={{position: [-10, -20, -10], fov: 25}}
                    gl={{preserveDrawingBuffer: true}}>
                <Suspense fallback={<CanvasLoader/>}>
                    <OrbitControls autoRotateSpeed={2} autoRotate={rotate}/>
                    <Space/>
                </Suspense>
                <Preload all/>
            </Canvas>
        </div>
    )
}
export default SpaceCanvas