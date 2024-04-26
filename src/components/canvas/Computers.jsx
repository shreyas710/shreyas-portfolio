git init
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader.jsx';

// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={1} groundColor={`black`} />
            <pointLight intensity={1} />
            <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
            <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.8}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]} />
        </mesh>
    )
}

const Space = () => {
    const computer = useGLTF('./need_some_space/scene.gltf')
    return (
        <mesh>
            <primitive object={computer.scene} scale={5}
                position={[-10, -2.5, 15.5]} />
        </mesh>
    )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // add listener for changes in screen size
        const mediaQuery = window.matchMedia("(max-width: 600px)");

        // set initial value of isMobile variable
        setIsMobile(mediaQuery.matches);

        // callback function to handle changes to media query
        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
        }

        // add callback function to handle changes to media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // remove listener when component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        }
    }, []);


    return (
        <Canvas frameloop={`demand`} shadows camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={-Math.PI / 2} />
                <Computers isMobile={isMobile} />
                <Space />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
export default ComputersCanvas