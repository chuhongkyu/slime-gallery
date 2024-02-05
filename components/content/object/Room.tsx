import * as THREE from 'three'
import React, { useRef } from 'react'
import { Sparkles, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { isHouseStore } from '../store'

type GLTFResult = GLTF & {
  nodes: {
    room_1: THREE.Mesh
    room_2: THREE.Mesh
    room_3: THREE.Mesh
  }
  materials: {
    ['flowers.000']: THREE.MeshStandardMaterial
    Furniture: THREE.MeshStandardMaterial
    room: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Room(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/room.glb') as GLTFResult
  const { setHouse } = isHouseStore();

  return (
    <group {...props}>
      <RigidBody name="floor" type="fixed" colliders="trimesh">
        <group rotation={[-Math.PI / 2, 0, -Math.PI/2]} scale={2.2}>
          <mesh geometry={nodes.room_1.geometry} material={materials['flowers.000']} />
          <mesh geometry={nodes.room_2.geometry} material={materials.Furniture} />
          <mesh geometry={nodes.room_3.geometry} material={materials.room} />
        </group>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid" onCollisionEnter={()=> setHouse(false)}>
          <mesh position={[0,3,0]}>
              <boxGeometry args={[1,1,1]}/>
              <meshToonMaterial color={"rgb(206, 246, 154)"}/>
          </mesh>
          <Sparkles position={[0,4,0.5]} count={25} scale={[4,4,4]} size={10} speed={0.4} color={"#eff8fc"}/>
      </RigidBody>
      <CuboidCollider position={[0,3.3,9]} args={[8,5,1]}/>
    </group>
  )
}

useGLTF.preload('/models/room.glb')
