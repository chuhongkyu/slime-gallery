import { Center, useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import { useSlimeStore } from "./store";

export default function Slime(props) {
  const group = useRef(null);
  const state = useSlimeStore()
  const texture = useTexture(state.slime)
  return (
    <group ref={group} {...props}>
        <mesh rotation={[0,0,0]} position={[0,1,0]}>
            <planeGeometry args={[3,3]} />
            <meshBasicMaterial map={texture}/>
        </mesh>
        <mesh rotation={[0,Math.PI,0]} position={[0,1,0]}>
            <planeGeometry args={[3,3]} />
            <meshBasicMaterial map={texture}/>
        </mesh>
    </group>
  );
}