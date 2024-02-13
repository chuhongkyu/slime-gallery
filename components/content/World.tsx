import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'

type GLTFResult = GLTF & {
  nodes: {
    ['Scene_Texture-base_0001_1']: THREE.Mesh
    ['Scene_Texture-base_0001_2']: THREE.Mesh
    ['Waterfall_Texture-base-gloss-jpg_0']: THREE.Mesh
  }
  materials: {
    ['Texture-base']: THREE.MeshStandardMaterial
    ['Texture-base-gloss-jpg']: THREE.MeshStandardMaterial
  }
}

export function World() {
  const { nodes, materials } = useGLTF('/models/world.glb') as GLTFResult
  return (
    <group position={[-3,0,0]}>
      <RigidBody type="fixed" colliders="trimesh">
        <group position={[-4.794, 0, 0.278]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[-14, 15.788, 4.337]}>
            <mesh castShadow receiveShadow geometry={nodes['Scene_Texture-base_0001_1'].geometry} material={materials['Texture-base']} />
            <mesh castShadow receiveShadow geometry={nodes['Scene_Texture-base_0001_2'].geometry} material={materials['Texture-base-gloss-jpg']} />
          </group>
        </group>
      </RigidBody>
      <mesh geometry={nodes['Waterfall_Texture-base-gloss-jpg_0'].geometry} material={materials['Texture-base-gloss-jpg']} />
    </group>
  )
}

useGLTF.preload('/models/world.glb')
