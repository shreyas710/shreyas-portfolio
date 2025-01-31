/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";

// eslint-disable-next-line react/prop-types
const Computers = () => {
    const computer = useGLTF("./space_station/scene.gltf");
    return (
        <mesh>
            <pointLight power={1000} intensity={1000} />
            <primitive
                object={computer.scene}
                scale={0.45}
                position={[5, 1, 10]}
                rotation={[0, 0, 0]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [mobile, setIsMobile] = useState(false);
    const [rotate, setRotate] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setRotate(false);
        }, 15000);
    }, []);

    if(mobile) {
        return;
    }

    return (
        <div className={`w-full h-full absolute inset-0 z-[-1]`}>
            <Canvas
                frameloop={`demand`}
                shadows
                camera={{ fov: 25, near: 0.1, far: 200, position: [20, 3, 5] }}
                gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls autoRotate={rotate} enableZoom={false} />
                    <Computers />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};
export default ComputersCanvas;
