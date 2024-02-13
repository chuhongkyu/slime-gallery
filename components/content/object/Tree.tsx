import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'

type GLTFResult = GLTF & {
  nodes: {
    Circle039_Material001_0: THREE.Mesh
    Circle040_Material001_0: THREE.Mesh
    Circle041_Material001_0: THREE.Mesh
    Circle042_Material001_0: THREE.Mesh
    Cylinder021_Material001_0: THREE.Mesh
    Circle043_Material001_0: THREE.Mesh
    Circle044_Material001_0: THREE.Mesh
    Circle045_Material001_0: THREE.Mesh
    Cylinder022_Material001_0: THREE.Mesh
    Circle048_Material001_0: THREE.Mesh
    Circle049_Material001_0: THREE.Mesh
    Circle050_Material001_0: THREE.Mesh
    Circle051_Material001_0: THREE.Mesh
    Circle052_Material001_0: THREE.Mesh
    Circle053_Material001_0: THREE.Mesh
    Circle054_Material001_0: THREE.Mesh
    Circle055_Material001_0: THREE.Mesh
    Circle056_Material001_0: THREE.Mesh
    Cylinder028_Material001_0: THREE.Mesh
    Cylinder029_Material001_0: THREE.Mesh
    Cylinder030_Material001_0: THREE.Mesh
    Cylinder032_Material001_0: THREE.Mesh
    Cylinder031_Material001_0: THREE.Mesh
    Cylinder027_Material001_0: THREE.Mesh
    Circle007_Material001_0: THREE.Mesh
    Circle008_Material001_0: THREE.Mesh
    Circle009_Material001_0: THREE.Mesh
    Circle010_Material001_0: THREE.Mesh
    Circle011_Material001_0: THREE.Mesh
    Circle012_Material001_0: THREE.Mesh
    Circle013_Material001_0: THREE.Mesh
    Circle014_Material001_0: THREE.Mesh
    Circle015_Material001_0: THREE.Mesh
    Cylinder_Material001_0: THREE.Mesh
    Cylinder006_Material001_0: THREE.Mesh
    Cylinder007_Material001_0: THREE.Mesh
    Cylinder008_Material001_0: THREE.Mesh
    Cylinder009_Material001_0: THREE.Mesh
    Cylinder005_Material001_0: THREE.Mesh
    Circle020_Material001_0: THREE.Mesh
    Circle016_Material001_0: THREE.Mesh
    Circle017_Material001_0: THREE.Mesh
    Circle018_Material001_0: THREE.Mesh
    Cylinder011_Material001_0: THREE.Mesh
    Circle024_Material001_0: THREE.Mesh
    Circle025_Material001_0: THREE.Mesh
    Circle027_Material001_0: THREE.Mesh
    Cylinder012_Material001_0: THREE.Mesh
    Cone_Material001_0: THREE.Mesh
    Cone001_Material001_0: THREE.Mesh
    Cylinder014_Material001_0: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Tree(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/tree.glb') as GLTFResult
  const [ state, setState ] = useState(false)

  return (
      <group {...props} dispose={null}>
        <group position={[19, 0.199, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
            <group position={[0.788, 0.148, -0.002]} scale={1.149}>
              <mesh geometry={nodes.Cylinder021_Material001_0.geometry} material={materials['Material.001']} />
              <mesh geometry={nodes.Circle039_Material001_0.geometry} material={materials['Material.001']} position={[-0.04, -0.037, 0.668]} />
              <mesh geometry={nodes.Circle040_Material001_0.geometry} material={materials['Material.001']} position={[-0.075, -0.017, 1.081]} />
              <mesh geometry={nodes.Circle041_Material001_0.geometry} material={materials['Material.001']} position={[-0.085, 0.01, 1.419]} />
              <mesh geometry={nodes.Circle042_Material001_0.geometry} material={materials['Material.001']} position={[-0.074, 0.003, 1.695]} />
            </group>
            <group position={[0.523, -0.618, -0.002]} scale={1.149}>
              <mesh geometry={nodes.Cylinder022_Material001_0.geometry} material={materials['Material.001']} />
              <mesh geometry={nodes.Circle043_Material001_0.geometry} material={materials['Material.001']} position={[0.015, -0.014, 0.5]} />
              <mesh geometry={nodes.Circle044_Material001_0.geometry} material={materials['Material.001']} position={[0.002, -0.028, 0.776]} />
              <mesh geometry={nodes.Circle045_Material001_0.geometry} material={materials['Material.001']} position={[-0.005, -0.03, 1.045]} />
            </group>
            <mesh geometry={nodes.Cylinder027_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Circle048_Material001_0.geometry} material={materials['Material.001']} position={[-0.003, -0.004, 2.448]} />
            <mesh geometry={nodes.Circle049_Material001_0.geometry} material={materials['Material.001']} position={[-0.193, 0.301, 1.299]} />
            <mesh geometry={nodes.Circle050_Material001_0.geometry} material={materials['Material.001']} position={[-0.101, -0.336, 1.405]} />
            <mesh geometry={nodes.Circle051_Material001_0.geometry} material={materials['Material.001']} position={[-0.003, -0.003, 1.747]} />
            <mesh geometry={nodes.Circle052_Material001_0.geometry} material={materials['Material.001']} position={[-0.108, -0.206, 2.105]} />
            <mesh geometry={nodes.Circle053_Material001_0.geometry} material={materials['Material.001']} position={[0.215, 0.034, 2.046]} />
            <mesh geometry={nodes.Circle054_Material001_0.geometry} material={materials['Material.001']} position={[0.003, 0.003, 0.853]} />
            <mesh geometry={nodes.Circle055_Material001_0.geometry} material={materials['Material.001']} position={[0.323, -0.016, 1.285]} />
            <mesh geometry={nodes.Circle056_Material001_0.geometry} material={materials['Material.001']} position={[-0.132, 0.138, 2.042]} />
            <mesh geometry={nodes.Cylinder028_Material001_0.geometry} material={materials['Material.001']} position={[0.21, 0.003, 1.856]} />
            <mesh geometry={nodes.Cylinder029_Material001_0.geometry} material={materials['Material.001']} position={[-0.16, 0.035, 2.373]} />
            <mesh geometry={nodes.Cylinder030_Material001_0.geometry} material={materials['Material.001']} position={[-0.126, 0.266, 0.74]} />
            <mesh geometry={nodes.Cylinder032_Material001_0.geometry} material={materials['Material.001']} position={[-0.017, -0.296, 0.649]} />
            <mesh geometry={nodes.Cylinder031_Material001_0.geometry} material={materials['Material.001']} position={[0.256, 0.127, 0.449]} />
        </group>
        <group position={[5, 0.199, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
          <mesh geometry={nodes.Cylinder005_Material001_0.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Circle007_Material001_0.geometry} material={materials['Material.001']} position={[-0.003, -0.004, 2.448]} />
          <mesh geometry={nodes.Circle008_Material001_0.geometry} material={materials['Material.001']} position={[-0.193, 0.301, 1.299]} />
          <mesh geometry={nodes.Circle009_Material001_0.geometry} material={materials['Material.001']} position={[-0.101, -0.336, 1.405]} />
          <mesh geometry={nodes.Circle010_Material001_0.geometry} material={materials['Material.001']} position={[-0.003, -0.003, 1.747]} />
          <mesh geometry={nodes.Circle011_Material001_0.geometry} material={materials['Material.001']} position={[-0.108, -0.206, 2.105]} />
          <mesh geometry={nodes.Circle012_Material001_0.geometry} material={materials['Material.001']} position={[0.215, 0.034, 2.046]} />
          <mesh geometry={nodes.Circle013_Material001_0.geometry} material={materials['Material.001']} position={[0.003, 0.003, 0.853]} />
          <mesh geometry={nodes.Circle014_Material001_0.geometry} material={materials['Material.001']} position={[0.323, -0.016, 1.285]} />
          <mesh geometry={nodes.Circle015_Material001_0.geometry} material={materials['Material.001']} position={[-0.132, 0.138, 2.042]} />
          <mesh geometry={nodes.Cylinder_Material001_0.geometry} material={materials['Material.001']} position={[0.21, 0.003, 1.856]} />
          <mesh geometry={nodes.Cylinder006_Material001_0.geometry} material={materials['Material.001']} position={[-0.16, 0.035, 2.373]} />
          <mesh geometry={nodes.Cylinder007_Material001_0.geometry} material={materials['Material.001']} position={[-0.126, 0.266, 0.74]} />
          <mesh geometry={nodes.Cylinder008_Material001_0.geometry} material={materials['Material.001']} position={[0.256, 0.127, 0.449]} />
          <mesh geometry={nodes.Cylinder009_Material001_0.geometry} material={materials['Material.001']} position={[-0.017, -0.296, 0.649]} />
        </group>

        <group position={[0, -0.169, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
          <mesh geometry={nodes.Cylinder011_Material001_0.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Circle020_Material001_0.geometry} material={materials['Material.001']} position={[0.013, 0.036, 0.669]} />
          <mesh geometry={nodes.Circle016_Material001_0.geometry} material={materials['Material.001']} position={[-0.017, 0.017, 1.084]} />
          <mesh geometry={nodes.Circle017_Material001_0.geometry} material={materials['Material.001']} position={[-0.043, 0.019, 1.423]} />
          <mesh geometry={nodes.Circle018_Material001_0.geometry} material={materials['Material.001']} position={[-0.032, 0.025, 1.699]} />
        </group>
        
        <group position={[-15, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={5}>
            <mesh geometry={nodes.Cylinder014_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Cone_Material001_0.geometry} material={materials['Material.001']} position={[-0.003, 0.01, 0.776]} />
            <mesh geometry={nodes.Cone001_Material001_0.geometry} material={materials['Material.001']} position={[0.001, 0.015, 0.523]} />
        </group>

        <group position={[-20, -0.212, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={5}>
            <mesh geometry={nodes.Cylinder012_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Circle024_Material001_0.geometry} material={materials['Material.001']} position={[0.015, -0.014, 0.5]} />
            <mesh geometry={nodes.Circle025_Material001_0.geometry} material={materials['Material.001']} position={[0.002, -0.028, 0.776]} />
            <mesh geometry={nodes.Circle027_Material001_0.geometry} material={materials['Material.001']} position={[-0.005, -0.03, 1.045]} />
        </group>

        <group position={[-8, -0.212, 8]} rotation={[-Math.PI / 2, 0, 0]} scale={4}>
            <mesh geometry={nodes.Cylinder012_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Circle024_Material001_0.geometry} material={materials['Material.001']} position={[0.015, -0.014, 0.5]} />
            <mesh geometry={nodes.Circle025_Material001_0.geometry} material={materials['Material.001']} position={[0.002, -0.028, 0.776]} />
            <mesh geometry={nodes.Circle027_Material001_0.geometry} material={materials['Material.001']} position={[-0.005, -0.03, 1.045]} />
        </group>

        <group position={[-1, -0.212, 8]} rotation={[-Math.PI / 2, 0, 0]} scale={5}>
            <mesh geometry={nodes.Cylinder012_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Circle024_Material001_0.geometry} material={materials['Material.001']} position={[0.015, -0.014, 0.5]} />
            <mesh geometry={nodes.Circle025_Material001_0.geometry} material={materials['Material.001']} position={[0.002, -0.028, 0.776]} />
            <mesh geometry={nodes.Circle027_Material001_0.geometry} material={materials['Material.001']} position={[-0.005, -0.03, 1.045]} />
        </group>
      </group>
  )
}

useGLTF.preload('/models/tree.glb')
