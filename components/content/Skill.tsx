import { useEffect, useRef } from "react";
import { useImageAnalysisStore } from "./store";
import useSetSkills, { ISkill } from "./utils/useSetSkills";
import { useKeyboardControls } from "@react-three/drei";
import { Controls } from "./Scene";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export const Skill = () => {
    const imageAnalysis = useImageAnalysisStore((state) => state.image);
    const { skills } = useSetSkills({ size: imageAnalysis.size, type: imageAnalysis.color })
    const isShoot = useRef(false);
    const skillPressed = useKeyboardControls((state) => state[Controls.back]);
   
    const rigidbody = useRef(null);

    useFrame(()=> {
        const impulse = { x: 0, y: 0, z: 0 };
        if (skillPressed) {
            impulse.y += 1;
            isShoot.current = true;
        }

        rigidbody?.current?.applyImpulse(impulse, true);
    })
    

    return(
        <>
            <RigidBody
                ref={rigidbody}
                type="fixed"
                colliders="ball" args={[1]} 
                shape="ball" scale={1}>
                <mesh position={[0,4,0]}>
                    <sphereGeometry args={[0.2]}/>
                    <meshBasicMaterial color={skills.color}/>
                </mesh>
            </RigidBody>
        </>
    )
}
