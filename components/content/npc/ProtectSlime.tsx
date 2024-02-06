import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion-3d"

export const ProtectSlime = ({imgUrl = "/npc/angle_warrior.png", position}) => {
  const rigidbody = useRef(null);
  const character = useRef(null);
  const [state, setState] = useState(false)

  const texture = useTexture(imgUrl)

  useFrame(() => {
    
  });

  return (
    <group>
      <RigidBody
        type="fixed"
        position={position}
        ref={rigidbody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
      >
        <CapsuleCollider 
          onCollisionExit={()=> setState(false)}
          onCollisionEnter={()=> setState(true)} 
          args={[0.4, 0.8]} position={[0, 1.2, 0]} />
        <group ref={character}>
            <motion.mesh 
                animate={
                  state ? 
                  {rotateZ:[0, Math.PI], y:0, transition: { duration: 0.5 }}:
                  {rotateX:[0, 0.3, 0], y: [0,-0.3,0], transition: { duration: 3, repeat: Infinity }}
                  }
                  position={[0,1.22,0]}>
                    <planeGeometry args={[3.8,3.8]} />
                    <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
                </motion.mesh>
        </group>
      </RigidBody>
    </group>
  );
};