import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'
import { Portal } from './Portal'
import { motion } from 'framer-motion-3d'

type GLTFResult = GLTF & {
  nodes: {
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
  }
  materials: {
    ['Material.031']: THREE.MeshStandardMaterial
    ['Material.030']: THREE.MeshStandardMaterial
  }
}

export function FloatCastle(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/floating_castle.glb') as GLTFResult
  return (
    <group {...props}>
        <motion.group animate={{y: [0,-0.3,0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut"}}} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.5}>
            <RigidBody type="fixed" colliders="trimesh">
              <mesh geometry={nodes.Object_3.geometry} material={materials['Material.031']} />
            </RigidBody>
            <RigidBody type="fixed" colliders="trimesh">
              <mesh geometry={nodes.Object_4.geometry} material={materials['Material.030']} />
            </RigidBody>
            <Portal position={[2.5,4.5,9.5]} path={"/content/onepage"}/>
        </motion.group>
    </group>
  )
}

useGLTF.preload('/models/floating_castle.glb')
