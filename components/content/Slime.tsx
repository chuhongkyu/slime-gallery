import { useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import { useSlimeStore } from "./store";
import { motion } from "framer-motion-3d"

export default function Slime(props) {
  const group = useRef(null);
  const imageUrl = useSlimeStore(state => state.imageUrl);
  const texture = useTexture(imageUrl)
  return (
    <motion.group animate={{scaleY: [1,1.2,1], transition: { duration: 1.2, repeat: Infinity }}} ref={group} {...props}>
        <mesh rotation={[0,0,0]} position={[0,1,0]}>
            <planeGeometry args={[3,3]} />
            <meshBasicMaterial map={texture} transparent/>
        </mesh>
        <mesh rotation={[0,Math.PI,0]} position={[0,1,0]}>
            <planeGeometry args={[3,3]} />
            <meshBasicMaterial map={texture} transparent/>
        </mesh>
        <mesh scale-y={0.1} position={[0,0,0]}>
            <sphereGeometry args={[0.6]} />
            <meshBasicMaterial color="rgb(44, 43, 43)" transparent opacity={0.7}/>
        </mesh>
    </motion.group>
  );
}