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
        <mesh rotation={[0,0,0]} position={[0,1.22,0]}>
            <planeGeometry args={[3,3]} />
            <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
        </mesh>
    </motion.group>
  );
}