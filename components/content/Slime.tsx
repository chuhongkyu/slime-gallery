import { useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import { useSlimeStore } from "./store";
import { motion } from "framer-motion-3d"


const variants = {
  initial: {

  },
  idle: {
    scaleY: [1,1.15,1], transition: { duration: 1.2, repeat: Infinity }
  },
  jump: {
    scaleY: 1
  }
}

export default function Slime() {
  const imageUrl = useSlimeStore(state => state.imageUrl);
  const texture = useTexture(imageUrl)

  return (
      <motion.group 
          variants={variants}
          animate={'idle'}>
          <mesh rotation={[0,0,0]} position={[0,1,0.05]}>
              <planeGeometry args={[1.5,1.5]} />
              <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
          </mesh>
          <mesh rotation={[0,0,0]} position={[0,1,-0.05]}>
              <planeGeometry args={[1.5,1.5]} />
              <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
          </mesh>
      </motion.group>
  );
}