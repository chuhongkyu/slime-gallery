import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { motion } from "framer-motion-3d"

export const NormalSlime = ({imgUrl = "/police.png", position}) => {
  const rigidbody = useRef(null);
  const character = useRef(null);
  const isOnFloor = useRef(true);

  const texture = useTexture(imgUrl)

  useFrame(() => {
    
  });

  return (
    <group>
      <RigidBody
        position={position}
        ref={rigidbody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        enabledRotations={[false, false, false]}
        onCollisionEnter={() => {
          isOnFloor.current = true;
        }}
      >
        <CapsuleCollider args={[0.4, 0.8]} position={[0, 1.2, 0]} />
        <group ref={character}>
            <motion.group animate={{scaleY: [1,1.15,1], transition: { duration: 1.2, repeat: Infinity }}}>
                <mesh rotation={[0,0,0]} position={[0,1.22,0]}>
                    <planeGeometry args={[3,3]} />
                    <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
                </mesh>
            </motion.group>
        </group>
        {/* 그림자 */}
        <mesh scale-y={0.1} position={[0,0,0]}>
            <sphereGeometry args={[0.6]} />
            <meshBasicMaterial color="rgb(61, 61, 61)"/>
        </mesh>
      </RigidBody>
    </group>
  );
};