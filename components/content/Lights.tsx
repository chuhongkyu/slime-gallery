import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const dirLight = useRef(null)
    useHelper(dirLight, DirectionalLightHelper, 1, "red");
    return(
        <>
            <ambientLight intensity={1} />
            <directionalLight ref={dirLight} castShadow position={[0, 5, 5]} shadow-mapSize={[1024, 1024]}>
                <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
            </directionalLight>
        </>
    )
}

export default Lights;