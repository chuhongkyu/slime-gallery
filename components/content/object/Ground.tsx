import { useEffect, useState } from "react";
import { Block } from "./Block"
import { CuboidCollider } from "@react-three/rapier";
import { RepeatWrapping, TextureLoader } from "three";

const blocks = [
    {
        x: 5,
        y: 0,
        z: -2
    },
    {
        x: 3,
        y: 0,
        z: 2
    }
];

export const Ground = () => {
    const texture = new TextureLoader().load('/tile/garden_tile.png');

    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(15, 15);


    return(
        <>
            <group position-y={-1} receiveShadow>
                {/* Ground */}
                <mesh rotation={[-Math.PI/2, 0, 0]}>
                    <planeGeometry args={[45,45]}/>
                    <meshBasicMaterial map={texture}/>
                </mesh>
                <CuboidCollider name="floor" position={[0, -1, 0]} args={[45, 1, 45]}/>
                
                {blocks.map((el, i)=> {
                    return(
                        <Block key={i + "Block"} position={[el.x, 0, el.z]}/>
                    )
                })}
            </group>
        </>
    )
}