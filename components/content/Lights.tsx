import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const dirLight = useRef(null)
    // useHelper(dirLight, DirectionalLightHelper, 1, "red");
    return(
        <>
            <ambientLight intensity={1} />
            <directionalLight castShadow ref={dirLight} position={[0, 5, 5]}/>
        </>
    )
}

export default Lights;