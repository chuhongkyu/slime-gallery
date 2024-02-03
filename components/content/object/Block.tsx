import * as THREE from 'three'
import React, { useRef } from 'react'
import { Detailed, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { CuboidCollider } from '@react-three/rapier'

type GLTFResult = GLTF & {
  nodes: {
    Mesh_block: THREE.Mesh
    Mesh_block_1: THREE.Mesh
  }
  materials: {
    grass: THREE.MeshStandardMaterial
    dirt: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Block(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/block.glb') as GLTFResult
  const { position } = props

  return (
    <>
      <group position={position} dispose={null}>
        <Detailed distances={[0, 25, 30]}>
          <group>
            <mesh receiveShadow position={[-0.5,0,0.5]} scale={[0.95, 1, 0.95]} geometry={nodes.Mesh_block.geometry} material={materials.grass} />
            <mesh receiveShadow position={[-0.5,0,0.5]} scale={[0.95, 1, 0.95]} geometry={nodes.Mesh_block_1.geometry} material={materials.dirt} />
          </group>
          <mesh position={[0,0.5,0]}>
            <boxGeometry args={[0.98,1,1]}/>
            <meshBasicMaterial color={"#2b9267"}/>
          </mesh>
        </Detailed>
        <CuboidCollider friction={1} restitution={0.1} name="floor" position={[0, 0.5, 0]} args={[0.5,0.5,0.5]} />
      </group>
    </>
  )
}

useGLTF.preload('/models/block.glb')
