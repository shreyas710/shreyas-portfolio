/* eslint-disable react/no-unknown-property */
import {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Float, OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader.jsx';
import {float} from "three/examples/jsm/nodes/shadernode/ShaderNode.js";

// eslint-disable-next-line react/prop-types

const Space = () => {
    const computer = useGLTF('./need_some_space/scene.gltf')
    return (
        <mesh>
            <primitive object={computer.scene} scale={3}
                       position={[0, 0, 1]}/>
        </mesh>
    )
}

const SpaceCanvas = () => {
    return (
        <div className={`w-full h-full absolute inset-0 z-[-1]`}>
            <Canvas frameloop={`demand`} camera={{position: [-10, 2, -10], fov: 25}}
                    gl={{preserveDrawingBuffer: true}}>
                <Suspense fallback={<CanvasLoader/>}>
                    <OrbitControls autoRotateSpeed={1} autoRotate/>
                    <Space/>
                </Suspense>
                <Preload all/>
            </Canvas>
        </div>
    )
}
export default SpaceCanvas