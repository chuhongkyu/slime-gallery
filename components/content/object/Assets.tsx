import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_6: THREE.Mesh
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_12: THREE.Mesh
    Object_14: THREE.Mesh
    Object_16: THREE.Mesh
    Object_18: THREE.Mesh
    Object_20: THREE.Mesh
    Object_22: THREE.Mesh
    Object_24: THREE.Mesh
    Object_26: THREE.Mesh
    Object_28: THREE.Mesh
    Object_30: THREE.Mesh
    Object_32: THREE.Mesh
    Object_34: THREE.Mesh
    Object_36: THREE.Mesh
    Object_38: THREE.Mesh
    Object_40: THREE.Mesh
    Object_42: THREE.Mesh
    Object_44: THREE.Mesh
    Object_46: THREE.Mesh
    Object_48: THREE.Mesh
    Object_50: THREE.Mesh
    Object_52: THREE.Mesh
    Object_54: THREE.Mesh
    Object_56: THREE.Mesh
    Object_58: THREE.Mesh
    Object_60: THREE.Mesh
    Object_62: THREE.Mesh
    Object_64: THREE.Mesh
    Object_66: THREE.Mesh
    Object_68: THREE.Mesh
    Object_70: THREE.Mesh
    Object_72: THREE.Mesh
    Object_74: THREE.Mesh
    Object_76: THREE.Mesh
    Object_78: THREE.Mesh
    Object_80: THREE.Mesh
    Object_82: THREE.Mesh
    Object_84: THREE.Mesh
    Object_86: THREE.Mesh
    Object_88: THREE.Mesh
    Object_90: THREE.Mesh
    Object_92: THREE.Mesh
    Object_94: THREE.Mesh
    Object_96: THREE.Mesh
    Object_98: THREE.Mesh
    Object_100: THREE.Mesh
    Object_102: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshBasicMaterial
    ['Material.002']: THREE.MeshBasicMaterial
  }
  // animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Assets(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/low_poly_assets.glb') as GLTFResult

  return (
    <RigidBody type="fixed" scale={0.25} rotation={[0,-Math.PI/2,0]} position={[0,0.2, -2]} colliders="trimesh" ccd>
      <group {...props} >
        <mesh castShadow geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[-30, 5.606, -10]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.999} />
        <mesh castShadow geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[-12, 5.606, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.999} />
        <mesh castShadow geometry={nodes.Object_22.geometry} material={materials['Material.001']} position={[-32, 9.236, 10]} rotation={[0, 0, 0]} scale={0.999} />
        <mesh castShadow geometry={nodes.Object_22.geometry} material={materials['Material.001']} position={[32, 9.236, 10]} rotation={[0, 0, 0]} scale={0.999} />
        <mesh castShadow geometry={nodes.Object_24.geometry} material={materials['Material.001']} position={[-20, 4.749, 20]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
        <mesh castShadow geometry={nodes.Object_24.geometry} material={materials['Material.001']} position={[45, 4.749, -10]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
        
        <mesh castShadow geometry={nodes.Object_28.geometry} material={materials['Material.001']} position={[10, 4.749, 18]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
        <mesh castShadow geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[32, 5.606, -25]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.999} />
        <mesh castShadow geometry={nodes.Object_24.geometry} material={materials['Material.001']} position={[-32, 5.606, -25]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
        <mesh castShadow geometry={nodes.Object_12.geometry} material={materials['Material.001']} position={[-10, 5.07, -30]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
        <mesh castShadow geometry={nodes.Object_12.geometry} material={materials['Material.001']} position={[15, 5.07, -30]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
        <mesh castShadow geometry={nodes.Object_6.geometry} material={materials['Material.001']} position={[22, 9.743, -45]} rotation={[0, 0, 0]} scale={0.999} />
        <mesh castShadow geometry={nodes.Object_8.geometry} material={materials['Material.001']} position={[-22, 9.743, -45]} rotation={[0, 0, 0]} scale={0.999} />
        <mesh castShadow geometry={nodes.Object_26.geometry} material={materials['Material.001']} position={[-22, 9.236, -70]} rotation={[0, 0, 0]} scale={0.999} />

        {/* 나무 그룹 */}
        <group position={[0,0, -80]}>
          <mesh castShadow geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[12, 5.606, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.999} />
          <mesh castShadow geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[-12, 5.606, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.999} />
          <mesh castShadow geometry={nodes.Object_22.geometry} material={materials['Material.001']} position={[-32, 9.236, 10]} rotation={[0, 0, 0]} scale={0.999} />
          <mesh castShadow geometry={nodes.Object_22.geometry} material={materials['Material.001']} position={[32, 9.236, 10]} rotation={[0, 0, 0]} scale={0.999} />
          <mesh castShadow geometry={nodes.Object_24.geometry} material={materials['Material.001']} position={[-20, 4.749, 20]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
          <mesh castShadow geometry={nodes.Object_24.geometry} material={materials['Material.001']} position={[20, 4.749, 20]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
          <mesh castShadow geometry={nodes.Object_26.geometry} material={materials['Material.001']} position={[15, 9.236, -20]} rotation={[0, 0, 0]} scale={0.999} />
          <mesh castShadow geometry={nodes.Object_28.geometry} material={materials['Material.001']} position={[-15, 4.749, -20]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
          <mesh castShadow geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[32, 5.606, -25]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.999} />
          <mesh castShadow geometry={nodes.Object_24.geometry} material={materials['Material.001']} position={[-32, 5.606, -25]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
          <mesh castShadow geometry={nodes.Object_12.geometry} material={materials['Material.001']} position={[-10, 5.07, -30]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
          <mesh castShadow geometry={nodes.Object_12.geometry} material={materials['Material.001']} position={[15, 5.07, -30]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.641} />
          <mesh castShadow geometry={nodes.Object_6.geometry} material={materials['Material.001']} position={[22, 9.743, -40]} rotation={[0, 0, 0]} scale={0.999} />
          <mesh castShadow geometry={nodes.Object_8.geometry} material={materials['Material.001']} position={[-22, 9.743, -40]} rotation={[0, 0, 0]} scale={0.999} />
        </group>

        {/* 울타리 */}
        <group position={[18,0,-20]} rotation-y={Math.PI/2}>
          <mesh castShadow geometry={nodes.Object_84.geometry} material={materials['Material.001']} position={[0, 0.324, -26.19]} scale={[0.185, 1.097, 0.185]} />
          <mesh castShadow geometry={nodes.Object_86.geometry} material={materials['Material.001']} position={[5, 0.356, -26.19]} scale={[0.185, 1.097, 0.185]} />
          <mesh castShadow geometry={nodes.Object_88.geometry} material={materials['Material.001']} position={[0, 0.316, -10.303]} scale={[0.185, 1.097, 0.185]} />
          <mesh castShadow geometry={nodes.Object_90.geometry} material={materials['Material.001']} position={[5, 0.281, -10.303]} scale={[0.185, 1.097, 0.185]} />
        </group>

        {/* 풀숲 */}
        <group position={[12, 0, -180]}>
          <mesh castShadow geometry={nodes.Object_36.geometry} material={materials['Material.001']} position={[7, 0.536, -8]} rotation={[-1.063, 0.062, 0.28]} scale={0.236} />
          <mesh castShadow geometry={nodes.Object_30.geometry} material={materials['Material.001']} position={[-10, -0.154, 10]} rotation={[0, -0.569, 0]} scale={0.49} />
          <mesh castShadow geometry={nodes.Object_32.geometry} material={materials['Material.001']} position={[-5, -0.187, -5]} rotation={[0, -0.569, 0]} scale={0.49} />
          <mesh castShadow geometry={nodes.Object_36.geometry} material={materials['Material.001']} position={[5, 0.536, 10]} rotation={[-1.063, 0.062, 0.28]} scale={0.236} />
          <mesh castShadow geometry={nodes.Object_38.geometry} material={materials['Material.001']} position={[10, 0.536, 5]} rotation={[-1.063, 0.062, 0.28]} scale={0.236} />
        </group>
        

        {/* 벤치 */}
        <mesh castShadow rotation-y={Math.PI/2} geometry={nodes.Object_62.geometry} material={materials['Material.001']} position={[-25, 0.86, -25]} scale={[2.478, 0.111, 0.111]} />
        <mesh castShadow rotation-y={-Math.PI/2} geometry={nodes.Object_58.geometry} material={materials['Material.001']} position={[10, 0.86, 28]} scale={[2.478, 0.111, 0.111]} />

        {/* 베이스 캠프 풀더미 */}
        <mesh castShadow geometry={nodes.Object_60.geometry} material={materials['Material.001']} position={[-10, 1.458, 30]} rotation={[0, -0.569, 0]} scale={0.49} />

        {/* 통 */}
        <group position={[0,0,-100]}>
          <mesh castShadow geometry={nodes.Object_80.geometry} material={materials['Material.001']} position={[0, 0.392, -25.89]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh castShadow geometry={nodes.Object_82.geometry} material={materials['Material.001']} position={[0, 0.543, -22.813]} rotation={[Math.PI / 2, 0, 0]} />
        </group>

        {/* 원형 등 */}
        <mesh castShadow geometry={nodes.Object_76.geometry} material={materials['Material.001']} position={[-12, 5.948, -60]} scale={[0.31, 5.576, 0.31]} />

        {/*굽은 등 */}
        <mesh castShadow geometry={nodes.Object_70.geometry} material={materials['Material.001']} position={[12, 8.187, -150]} scale={[0.31, 5.576, 0.31]} />
        
        {/*굽은 원형 등 */}
        <mesh castShadow geometry={nodes.Object_78.geometry} material={materials['Material.001']} position={[10, 5.614, 35]} scale={[0.31, 5.576, 0.31]} />

        {/* 등 */}
        <group>
          <mesh castShadow geometry={nodes.Object_68.geometry} material={materials['Material.001']} position={[12, 8.534, -100]} scale={[0.31, 5.576, 0.31]} />
          <mesh castShadow geometry={nodes.Object_68.geometry} material={materials['Material.001']} position={[12, 8.534, -150]} scale={[0.31, 5.576, 0.31]} />
          <mesh castShadow geometry={nodes.Object_68.geometry} material={materials['Material.001']} position={[12, 8.534, -200]} scale={[0.31, 5.576, 0.31]} />
          <mesh castShadow geometry={nodes.Object_68.geometry} material={materials['Material.001']} position={[12, 8.534, -250]} scale={[0.31, 5.576, 0.31]} />
        </group>
      

        {/* 굽은 신호 등 */}
        {/* <mesh castShadow geometry={nodes.Object_66.geometry} material={materials['Material.001']} position={[-12, 7.94, -150]} scale={[0.31, 5.576, 0.31]} /> */}
        {/* 신호 등 */}
        {/* <mesh castShadow geometry={nodes.Object_64.geometry} material={materials['Material.001']} position={[-12, 8.411, -200]} scale={[0.31, 5.576, 0.31]} /> */}

        {/* <mesh castShadow geometry={nodes.Object_40.geometry} material={materials['Material.001']} position={[0, -1.035, -0.279]} rotation={[0, 1.474, 0]} scale={0.333} />
        <mesh castShadow geometry={nodes.Object_42.geometry} material={materials['Material.001']} position={[0, -0.875, -0.377]} rotation={[0, 1.474, 0]} scale={0.333} />
        <mesh castShadow geometry={nodes.Object_44.geometry} material={materials['Material.001']} position={[0, -1.035, -0.279]} rotation={[0, 1.474, 0]} scale={0.333} />
        <mesh castShadow geometry={nodes.Object_46.geometry} material={materials['Material.001']} position={[0, 0.068, -8.784]} rotation={[0, -0.569, 0]} scale={0.49} />
        <mesh castShadow geometry={nodes.Object_48.geometry} material={materials['Material.001']} position={[0, 0.868, -12.789]} rotation={[0, -0.569, 0]} scale={0.49} /> */}
        
        {/* <mesh castShadow geometry={nodes.Object_50.geometry} material={materials['Material.001']} position={[0, -1.232, -8.4]} />
        <mesh castShadow geometry={nodes.Object_52.geometry} material={materials['Material.001']} position={[0, -1.211, -12.774]} />
        <mesh castShadow geometry={nodes.Object_54.geometry} material={materials['Material.001']} position={[0, -1.375, -16.446]} />
        <mesh castShadow geometry={nodes.Object_56.geometry} material={materials['Material.001']} position={[0, -1.25, -20.248]} /> */}
        {/* 간판 뒤 3개 */}
        {/* <mesh castShadow geometry={nodes.Object_92.geometry} material={materials['Material.001']} position={[25.252, 7.947, -34.154]} scale={[0.31, 5.576, 0.31]} />
        <mesh castShadow geometry={nodes.Object_94.geometry} material={materials['Material.002']} position={[25.241, 8.482, -33.796]} scale={[1.637, 1.637, 0.165]} />
        <mesh castShadow geometry={nodes.Object_96.geometry} material={materials['Material.001']} position={[20.853, 7.765, -34.171]} scale={[0.31, 5.576, 0.31]} />
        <mesh castShadow geometry={nodes.Object_98.geometry} material={materials['Material.002']} position={[20.885, 7.99, -33.67]} scale={[2.126, 1.992, 1.992]} />
        <mesh castShadow geometry={nodes.Object_100.geometry} material={materials['Material.001']} position={[15.833, 7.925, -34.047]} scale={[0.31, 5.576, 0.31]} />
        <mesh castShadow geometry={nodes.Object_102.geometry} material={materials['Material.002']} position={[15.827, 8.355, -33.604]} rotation={[Math.PI / 2, 0, 0]} scale={1.942} /> */}

        {/* 등 조각 */}
        {/* <mesh castShadow geometry={nodes.Object_74.geometry} material={materials['Material.001']} position={[0, -0.096, -4.655]} scale={[0.175, 3.151, 0.175]} /> */}
        
        {/* 꽃 */}
        <mesh castShadow geometry={nodes.Object_34.geometry} material={materials['Material.001']} position={[12, 0, -5]} rotation={[0, 1.474, 0]} scale={0.333} />
        
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/models/low_poly_assets.glb')
