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

export default function Slime(props) {
  const { jumpPressed } = props;
  const group = useRef(null);
  const imageUrl = useSlimeStore(state => state.imageUrl);
  const texture = useTexture(imageUrl)

  return (
    <motion.group 
        variants={variants}
        animate={jumpPressed ? 'jump' : 'idle'} ref={group}>
        <mesh rotation={[0,0,0]} position={[0,1.22,0.1]}>
            <planeGeometry args={[3,3]} />
            <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
        </mesh>
        {/* 그림자 */}
        {/* <mesh position={[0,1,0]} castShadow>
            <circleGeometry args={[0.55,32]} />
            <meshBasicMaterial color="rgb(61, 61, 61)" side={2}/>
        </mesh> */}
        <mesh rotation={[0,0,0]} position={[0,1.22,-0.1]}>
            <planeGeometry args={[3,3]} />
            <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
        </mesh>
    </motion.group>
  );
}