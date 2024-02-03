import * as THREE from 'three'
import React, { useRef } from 'react'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { isHouseStore } from '../store';

export function Room1(props) {
  const { position } = props
  const { setHouse } = isHouseStore();

  return (
      <group position={position}>
        <mesh>
          <boxGeometry args={[20,2,10]}/>
          <meshToonMaterial color={"rgb(108, 61, 7)"}/>
        </mesh>
        <CuboidCollider name="floor" args={[10,1,5]}/>
        <mesh position={[0,5,-5]} rotation={[Math.PI/2,0,0]}>
          <boxGeometry args={[20,2,10]}/>
          <meshToonMaterial color={"rgb(108, 61, 7)"}/>
        </mesh>
        <CuboidCollider position={[0,5,-5]} rotation={[Math.PI/2,0,0]} name="wall" args={[10,1,5]}/>
        <mesh position={[-5,5,0]} rotation={[Math.PI/2, 0, Math.PI/2]}>
          <boxGeometry args={[10,2,10]}/>
          <meshToonMaterial color={"rgb(108, 61, 7)"}/>
        </mesh>
        <CuboidCollider position={[-5,5,0]} rotation={[Math.PI/2, 0, Math.PI/2]} name="wall" args={[5,1,5]}/>

        <RigidBody type="fixed" colliders="cuboid" onCollisionEnter={()=> setHouse(false)}>
          <mesh position={[-5,0,0]}>
              <boxGeometry args={[5,6,2]}/>
              <meshToonMaterial color={"rgb(144, 144, 144)"}/>
          </mesh>
        </RigidBody>
      </group>
    // </RigidBody>
  )
}