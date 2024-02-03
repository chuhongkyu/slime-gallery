import * as THREE from 'three'
import React, { useRef } from 'react'
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
    Object_77: THREE.Mesh
    Object_79: THREE.Mesh
    Object_81: THREE.Mesh
    Object_82: THREE.Mesh
    Object_84: THREE.Mesh
    Object_85: THREE.Mesh
    Object_87: THREE.Mesh
    Object_88: THREE.Mesh
    Object_90: THREE.Mesh
    Object_92: THREE.Mesh
    Object_93: THREE.Mesh
    Object_95: THREE.Mesh
    Object_96: THREE.Mesh
    Object_97: THREE.Mesh
    Object_98: THREE.Mesh
    Object_100: THREE.Mesh
    Object_101: THREE.Mesh
    Object_103: THREE.Mesh
    Object_104: THREE.Mesh
    Object_105: THREE.Mesh
    Object_106: THREE.Mesh
    Object_108: THREE.Mesh
    Object_109: THREE.Mesh
    Object_110: THREE.Mesh
    Object_111: THREE.Mesh
    Object_113: THREE.Mesh
    Object_114: THREE.Mesh
    Object_115: THREE.Mesh
    Object_116: THREE.Mesh
    Object_118: THREE.Mesh
    Object_119: THREE.Mesh
    Object_121: THREE.Mesh
    Object_122: THREE.Mesh
    Object_124: THREE.Mesh
    Object_125: THREE.Mesh
    Object_127: THREE.Mesh
    Object_128: THREE.Mesh
    Object_130: THREE.Mesh
    Object_131: THREE.Mesh
    Object_132: THREE.Mesh
    Object_134: THREE.Mesh
    Object_135: THREE.Mesh
    Object_136: THREE.Mesh
    Object_138: THREE.Mesh
    Object_139: THREE.Mesh
    Object_140: THREE.Mesh
    Object_142: THREE.Mesh
    Object_143: THREE.Mesh
    Object_144: THREE.Mesh
    Object_146: THREE.Mesh
    Object_147: THREE.Mesh
    Object_148: THREE.Mesh
    Object_150: THREE.Mesh
    Object_151: THREE.Mesh
    Object_152: THREE.Mesh
    Object_154: THREE.Mesh
    Object_155: THREE.Mesh
    Object_156: THREE.Mesh
    Object_158: THREE.Mesh
    Object_159: THREE.Mesh
    Object_160: THREE.Mesh
    Object_162: THREE.Mesh
    Object_163: THREE.Mesh
    Object_164: THREE.Mesh
    Object_166: THREE.Mesh
    Object_167: THREE.Mesh
    Object_168: THREE.Mesh
    Object_170: THREE.Mesh
    Object_171: THREE.Mesh
    Object_172: THREE.Mesh
    Object_174: THREE.Mesh
    Object_175: THREE.Mesh
    Object_176: THREE.Mesh
    Object_178: THREE.Mesh
    Object_179: THREE.Mesh
    Object_180: THREE.Mesh
    Object_182: THREE.Mesh
    Object_183: THREE.Mesh
    Object_184: THREE.Mesh
    Object_186: THREE.Mesh
    Object_187: THREE.Mesh
    Object_188: THREE.Mesh
    Object_190: THREE.Mesh
    Object_191: THREE.Mesh
    Object_192: THREE.Mesh
    Object_194: THREE.Mesh
    Object_195: THREE.Mesh
    Object_197: THREE.Mesh
    Object_199: THREE.Mesh
    Object_200: THREE.Mesh
    Object_202: THREE.Mesh
    Object_204: THREE.Mesh
    Object_205: THREE.Mesh
    Object_207: THREE.Mesh
    Object_208: THREE.Mesh
    Object_210: THREE.Mesh
    Object_211: THREE.Mesh
    Object_212: THREE.Mesh
    Object_214: THREE.Mesh
    Object_216: THREE.Mesh
    Object_217: THREE.Mesh
    Object_219: THREE.Mesh
    Object_220: THREE.Mesh
    Object_221: THREE.Mesh
    Object_222: THREE.Mesh
    Object_224: THREE.Mesh
    Object_225: THREE.Mesh
    Object_227: THREE.Mesh
    Object_228: THREE.Mesh
    Object_229: THREE.Mesh
    Object_230: THREE.Mesh
    Object_232: THREE.Mesh
    Object_233: THREE.Mesh
    Object_235: THREE.Mesh
    Object_237: THREE.Mesh
    Object_239: THREE.Mesh
    Object_241: THREE.Mesh
    Object_243: THREE.Mesh
    Object_245: THREE.Mesh
    Object_247: THREE.Mesh
    Object_249: THREE.Mesh
    Object_251: THREE.Mesh
    Object_253: THREE.Mesh
    Object_255: THREE.Mesh
    Object_257: THREE.Mesh
    Object_259: THREE.Mesh
    Object_261: THREE.Mesh
    Object_263: THREE.Mesh
    Object_265: THREE.Mesh
    Object_267: THREE.Mesh
    Object_269: THREE.Mesh
    Object_271: THREE.Mesh
    Object_273: THREE.Mesh
    Object_274: THREE.Mesh
    Object_276: THREE.Mesh
    Object_277: THREE.Mesh
    Object_279: THREE.Mesh
    Object_281: THREE.Mesh
    Object_282: THREE.Mesh
    Object_284: THREE.Mesh
    Object_285: THREE.Mesh
    Object_287: THREE.Mesh
    Object_289: THREE.Mesh
    Object_290: THREE.Mesh
    Object_292: THREE.Mesh
    Object_293: THREE.Mesh
    Object_295: THREE.Mesh
    Object_296: THREE.Mesh
    Object_298: THREE.Mesh
    Object_300: THREE.Mesh
    Object_301: THREE.Mesh
    Object_303: THREE.Mesh
    Object_304: THREE.Mesh
    Object_305: THREE.Mesh
    Object_307: THREE.Mesh
    Object_309: THREE.Mesh
    Object_311: THREE.Mesh
    Object_312: THREE.Mesh
    Object_313: THREE.Mesh
    Object_315: THREE.Mesh
    Object_317: THREE.Mesh
    Object_318: THREE.Mesh
    Object_320: THREE.Mesh
    Object_322: THREE.Mesh
    Object_323: THREE.Mesh
    Object_325: THREE.Mesh
    Object_326: THREE.Mesh
    Object_328: THREE.Mesh
    Object_329: THREE.Mesh
    Object_331: THREE.Mesh
    Object_332: THREE.Mesh
    Object_334: THREE.Mesh
    Object_335: THREE.Mesh
    Object_337: THREE.Mesh
    Object_338: THREE.Mesh
    Object_340: THREE.Mesh
    Object_341: THREE.Mesh
    Object_343: THREE.Mesh
    Object_344: THREE.Mesh
    Object_346: THREE.Mesh
    Object_347: THREE.Mesh
    Object_349: THREE.Mesh
    Object_350: THREE.Mesh
    Object_352: THREE.Mesh
    Object_354: THREE.Mesh
    Object_355: THREE.Mesh
    Object_357: THREE.Mesh
    Object_358: THREE.Mesh
    Object_360: THREE.Mesh
    Object_362: THREE.Mesh
    Object_364: THREE.Mesh
    Object_365: THREE.Mesh
    Object_367: THREE.Mesh
    Object_368: THREE.Mesh
    Object_370: THREE.Mesh
    Object_372: THREE.Mesh
    Object_374: THREE.Mesh
    Object_376: THREE.Mesh
    Object_377: THREE.Mesh
    Object_379: THREE.Mesh
    Object_381: THREE.Mesh
    Object_383: THREE.Mesh
    Object_384: THREE.Mesh
    Object_386: THREE.Mesh
    Object_388: THREE.Mesh
    Object_390: THREE.Mesh
    Object_391: THREE.Mesh
    Object_393: THREE.Mesh
    Object_394: THREE.Mesh
  }
  materials: {
    green: THREE.MeshStandardMaterial
    medium_stone_1: THREE.MeshStandardMaterial
    light_stone_3: THREE.MeshStandardMaterial
    emission_2: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    dark_wood: THREE.MeshStandardMaterial
    emission: THREE.MeshStandardMaterial
    roof: THREE.MeshStandardMaterial
    dark_stone_2: THREE.MeshStandardMaterial
    wood: THREE.MeshStandardMaterial
    material_0: THREE.MeshStandardMaterial
    water: THREE.MeshStandardMaterial
    grass: THREE.MeshStandardMaterial
    dirt: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Castle(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/castle.glb') as GLTFResult
  return (
    <RigidBody name="floor" type="fixed" position={[0,-15,0]} colliders="trimesh">
      <group {...props}  rotation={[0, Math.PI, 0]} dispose={null}>
        <group castShadow rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-11.168, 28.565, 3.207]} rotation={[0, -0.436, 0]} scale={[5.719, 4.496, 1]}>
              <mesh geometry={nodes.Object_76.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_77.geometry} material={materials.light_stone_3} />
            </group>
            <group position={[15.921, 16.501, -7.333]} rotation={[-1.658, 0.946, 0]} scale={[1.004, 1.229, 1.004]}>
              <mesh geometry={nodes.Object_81.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_82.geometry} material={materials.dark_wood} />
            </group>
            <group position={[15.921, 16.68, -4.828]} rotation={[0, 0.946, 0]} scale={[1.004, 1.229, 1.004]}>
              <mesh geometry={nodes.Object_84.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_85.geometry} material={materials.dark_wood} />
            </group>
            <group position={[18.05, 26.561, -19.368]} rotation={[0, 0.946, 0]} scale={[1.004, 1.229, 1.004]}>
              <mesh geometry={nodes.Object_87.geometry} material={materials.dark_wood} />
              <mesh geometry={nodes.Object_88.geometry} material={materials.Metal} />
            </group>
            <group position={[12.235, 27.169, 12.185]} rotation={[0.157, 0.478, -0.1]} scale={0.266}>
              <mesh geometry={nodes.Object_92.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_93.geometry} material={materials.emission} />
            </group>
            <group position={[-5.995, 32.122, 4.888]} rotation={[0, 1.06, 0]}>
              <mesh geometry={nodes.Object_95.geometry} material={materials.light_stone_3} />
              <mesh geometry={nodes.Object_96.geometry} material={materials.roof} />
              <mesh geometry={nodes.Object_97.geometry} material={materials.dark_stone_2} />
              <mesh geometry={nodes.Object_98.geometry} material={materials.wood} />
            </group>
            <group position={[25.187, 6.115, 15.428]} scale={[1.138, 1.393, 1.138]}>
              <mesh geometry={nodes.Object_100.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_101.geometry} material={materials.dark_wood} />
            </group>
            <group position={[-17.473, 39.627, -0.49]} rotation={[0, 0.449, 0]}>
              <mesh geometry={nodes.Object_103.geometry} material={materials.light_stone_3} />
              <mesh geometry={nodes.Object_104.geometry} material={materials.roof} />
              <mesh geometry={nodes.Object_105.geometry} material={materials.dark_stone_2} />
              <mesh geometry={nodes.Object_106.geometry} material={materials.wood} />
            </group>
            <group position={[7.522, 34.818, 10.737]} rotation={[0, 1.409, 0]}>
              <mesh geometry={nodes.Object_108.geometry} material={materials.light_stone_3} />
              <mesh geometry={nodes.Object_109.geometry} material={materials.roof} />
              <mesh geometry={nodes.Object_110.geometry} material={materials.dark_stone_2} />
              <mesh geometry={nodes.Object_111.geometry} material={materials.wood} />
            </group>
            <group position={[-18.988, 35.286, -27.387]} rotation={[-Math.PI, -0.162, -Math.PI]} scale={[-1, 1, 1]}>
              <mesh geometry={nodes.Object_113.geometry} material={materials.light_stone_3} />
              <mesh geometry={nodes.Object_114.geometry} material={materials.roof} />
              <mesh geometry={nodes.Object_115.geometry} material={materials.dark_stone_2} />
              <mesh geometry={nodes.Object_116.geometry} material={materials.wood} />
            </group>
            <group position={[-9.55, 16.68, -19.58]} rotation={[0, 0.946, 0]} scale={[1.004, 1.229, 1.004]}>
              <mesh geometry={nodes.Object_118.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_119.geometry} material={materials.dark_wood} />
            </group>
            <group position={[-0.299, 6.115, -11.457]} rotation={[0, 0.597, 0]} scale={[1.138, 1.393, 1.138]}>
              <mesh geometry={nodes.Object_121.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_122.geometry} material={materials.dark_wood} />
            </group>
            <group position={[1.408, 5.583, -9.796]} rotation={[0, 0.698, -Math.PI / 2]} scale={[1.138, 1.393, 1.138]}>
              <mesh geometry={nodes.Object_124.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_125.geometry} material={materials.dark_wood} />
            </group>
            <group position={[-1.457, 6.115, -10.067]} scale={[1.138, 1.393, 1.138]}>
              <mesh geometry={nodes.Object_127.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_128.geometry} material={materials.dark_wood} />
            </group>
            <group position={[12.606, 22.823, 10.148]} rotation={[Math.PI / 2, 0, 1.552]} scale={[-0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_130.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_131.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_132.geometry} material={materials.wood} />
            </group>
            <group position={[-6.904, 21.206, 3.837]} rotation={[Math.PI / 2, 0, 1.552]} scale={[-0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_134.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_135.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_136.geometry} material={materials.wood} />
            </group>
            <group position={[-16.452, 21.206, 15.39]} rotation={[Math.PI / 2, 0, -2.986]} scale={[-0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_138.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_139.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_140.geometry} material={materials.emission} />
            </group>
            <group position={[-11.43, 21.407, -18.523]} rotation={[Math.PI / 2, 0, 0.013]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_142.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_143.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_144.geometry} material={materials.dark_wood} />
            </group>
            <group position={[15.339, 21.206, 2.992]} rotation={[Math.PI / 2, 0, -1.552]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_146.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_147.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_148.geometry} material={materials.emission} />
            </group>
            <group position={[15.339, 21.206, -3.297]} rotation={[Math.PI / 2, 0, -1.552]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_150.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_151.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_152.geometry} material={materials.wood} />
            </group>
            <group position={[15.339, 21.206, -12.141]} rotation={[Math.PI / 2, 0, -1.552]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_154.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_155.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_156.geometry} material={materials.wood} />
            </group>
            <group position={[14.146, 21.407, -13.215]} rotation={[Math.PI / 2, 0, -3.035]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_158.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_159.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_160.geometry} material={materials.emission} />
            </group>
            <group position={[-5.202, 21.407, -13.215]} rotation={[Math.PI / 2, 0, -3.035]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_162.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_163.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_164.geometry} material={materials.wood} />
            </group>
            <group position={[-8.885, 9.793, 10.311]} rotation={[Math.PI / 2, 0, -1.377]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_166.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_167.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_168.geometry} material={materials.wood} />
            </group>
            <group position={[-8.885, 9.793, 1.168]} rotation={[Math.PI / 2, 0, -1.377]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_170.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_171.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_172.geometry} material={materials.wood} />
            </group>
            <group position={[-8.885, 9.793, -7.64]} rotation={[Math.PI / 2, 0, -1.377]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_174.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_175.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_176.geometry} material={materials.wood} />
            </group>
            <group position={[-8.885, 9.793, -16.878]} rotation={[Math.PI / 2, 0, -1.377]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_178.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_179.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_180.geometry} material={materials.wood} />
            </group>
            <group position={[12.71, 9.283, 3.084]} rotation={[Math.PI / 2, 0, 1.328]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_182.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_183.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_184.geometry} material={materials.wood} />
            </group>
            <group position={[12.881, 9.283, -11.893]} rotation={[Math.PI / 2, 0, 1.328]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_186.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_187.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_188.geometry} material={materials.emission} />
            </group>
            <group position={[-1.455, 9.283, -11.893]} rotation={[Math.PI / 2, 0, -1.377]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_190.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_191.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_192.geometry} material={materials.wood} />
            </group>
            <group position={[0.569, 25.878, -21.19]} scale={0.266}>
              <mesh geometry={nodes.Object_194.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_195.geometry} material={materials.emission} />
            </group>
            <group position={[-9.527, 30.942, 4.358]} rotation={[0, 0.436, 0]} scale={0.266}>
              <mesh geometry={nodes.Object_199.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_200.geometry} material={materials.emission} />
            </group>
            <group position={[24.497, 5.583, 13.127]} rotation={[0, 0.698, -Math.PI / 2]} scale={[1.138, 1.393, 1.138]}>
              <mesh geometry={nodes.Object_204.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_205.geometry} material={materials.dark_wood} />
            </group>
            <group position={[22.356, 6.115, 15.513]} rotation={[0, 0.597, 0]} scale={[1.138, 1.393, 1.138]}>
              <mesh geometry={nodes.Object_207.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_208.geometry} material={materials.dark_wood} />
            </group>
            <group position={[-8.885, 9.793, -25.584]} rotation={[Math.PI / 2, 0, -1.377]} scale={[0.087, 0.599, 0.072]}>
              <mesh geometry={nodes.Object_210.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_211.geometry} material={materials.emission} />
              <mesh geometry={nodes.Object_212.geometry} material={materials.wood} />
            </group>
            <group position={[-13.703, 30.942, 1.457]} rotation={[0, 0.436, 0]} scale={0.266}>
              <mesh geometry={nodes.Object_216.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_217.geometry} material={materials.emission} />
            </group>
            <group position={[-19.553, 32.637, -12.182]} rotation={[0, -0.075, 0]}>
              <mesh geometry={nodes.Object_219.geometry} material={materials.light_stone_3} />
              <mesh geometry={nodes.Object_220.geometry} material={materials.roof} />
              <mesh geometry={nodes.Object_221.geometry} material={materials.dark_stone_2} />
              <mesh geometry={nodes.Object_222.geometry} material={materials.wood} />
            </group>
            <group position={[1.877, 30.737, -9.369]} rotation={[-Math.PI, 1.396, -Math.PI]} scale={0.266}>
              <mesh geometry={nodes.Object_224.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_225.geometry} material={materials.emission} />
            </group>
            <group position={[19.927, 37.277, 10.427]} rotation={[0, 1.496, 0]}>
              <mesh geometry={nodes.Object_227.geometry} material={materials.light_stone_3} />
              <mesh geometry={nodes.Object_228.geometry} material={materials.roof} />
              <mesh geometry={nodes.Object_229.geometry} material={materials.dark_stone_2} />
              <mesh geometry={nodes.Object_230.geometry} material={materials.wood} />
            </group>
            <group position={[-10.692, 29.217, -2.22]} scale={0.266}>
              <mesh geometry={nodes.Object_232.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_233.geometry} material={materials.emission} />
            </group>
            <group position={[-12.722, 28.071, -14.663]} scale={[3.785, 2.779, 5.492]}>
              <mesh geometry={nodes.Object_273.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_274.geometry} material={materials.light_stone_3} />
            </group>
            <group position={[-10.781, 26.96, -2.373]} rotation={[-Math.PI, -0.467, -Math.PI]} scale={[0.335, 1.99, 0.48]}>
              <mesh geometry={nodes.Object_276.geometry} material={materials.dark_stone_2} />
              <mesh geometry={nodes.Object_277.geometry} material={materials.light_stone_3} />
            </group>
            <group position={[7.114, 24.996, -24.499]} scale={[6.958, 1.791, 3.926]}>
              <mesh geometry={nodes.Object_281.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_282.geometry} material={materials.light_stone_3} />
            </group>
            <group position={[-7.153, 25.07, -2.466]} rotation={[-Math.PI, 0.313, -Math.PI]} scale={[1.89, 0.334, 3.224]}>
              <mesh geometry={nodes.Object_284.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_285.geometry} material={materials.light_stone_3} />
            </group>
            <group position={[13.295, 5.685, 1.664]} rotation={[-Math.PI, -0.611, 0]} scale={[-0.167, 1.273, 0.05]}>
              <mesh geometry={nodes.Object_289.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_290.geometry} material={materials.dark_wood} />
            </group>
            <group position={[16.754, 5.685, -7.618]} rotation={[0, -0.262, Math.PI]} scale={[-0.167, 1.273, 0.05]}>
              <mesh geometry={nodes.Object_292.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_293.geometry} material={materials.dark_wood} />
            </group>
            <group position={[16.999, 5.525, -4.911]} rotation={[0, 0.873, 0]} scale={0.785}>
              <mesh geometry={nodes.Object_295.geometry} material={materials.dark_wood} />
              <mesh geometry={nodes.Object_296.geometry} material={materials.wood} />
            </group>
            <group position={[3.609, 19.392, -3.691]} scale={[1, 6.05, 1]}>
              <mesh geometry={nodes.Object_300.geometry} material={materials.dark_stone_2} />
              <mesh geometry={nodes.Object_301.geometry} material={materials.wood} />
            </group>
            <group position={[-0.486, 12.664, -0.548]} scale={[20, 12.657, 20]}>
              <mesh geometry={nodes.Object_303.geometry} material={materials.grass} />
              <mesh geometry={nodes.Object_304.geometry} material={materials.dirt} />
              <mesh geometry={nodes.Object_305.geometry} material={materials.dark_stone_2} />
            </group>
            <group position={[8.846, 25.908, -2.093]} rotation={[Math.PI, -1.32, Math.PI]} scale={[0.767, 0.592, 0.767]}>
              <mesh geometry={nodes.Object_311.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_312.geometry} material={materials.light_stone_3} />
              <mesh geometry={nodes.Object_313.geometry} material={materials.Metal} />
            </group>
            <group position={[-17.042, 28.565, -7.752]} rotation={[Math.PI, -1.208, Math.PI]} scale={[5.719, 4.496, 1]}>
              <mesh geometry={nodes.Object_317.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_318.geometry} material={materials.light_stone_3} />
            </group>
            <group position={[17.913, 16.958, 15.236]} scale={2.402}>
              <mesh geometry={nodes.Object_322.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_323.geometry} material={materials.Metal} />
            </group>
            <group position={[16.206, 8.731, 14.86]} rotation={[0, -0.119, 0]} scale={2.402}>
              <mesh geometry={nodes.Object_325.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_326.geometry} material={materials.Metal} />
            </group>
            <group position={[13.592, 5.957, 14.601]} rotation={[0, -0.113, 0]} scale={2.402}>
              <mesh geometry={nodes.Object_328.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_329.geometry} material={materials.Metal} />
            </group>
            <group position={[18.561, 5.957, 15.055]} scale={2.402}>
              <mesh geometry={nodes.Object_331.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_332.geometry} material={materials.Metal} />
            </group>
            <group position={[12.249, 7.121, -16.01]} rotation={[0, -0.611, 0]} scale={[0.391, 1.215, 2.249]}>
              <mesh geometry={nodes.Object_334.geometry} material={materials.Metal} />
              <mesh geometry={nodes.Object_335.geometry} material={materials.dark_wood} />
            </group>
            <group position={[5.841, 16.511, -20.432]} rotation={[Math.PI, 1.019, 0]} scale={[0.167, 1.273, 0.05]}>
              <mesh geometry={nodes.Object_337.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_338.geometry} material={materials.dark_wood} />
            </group>
            <group position={[9.89, 16.511, -21.733]} rotation={[-Math.PI, -0.918, 0]} scale={[0.167, 1.273, 0.05]}>
              <mesh geometry={nodes.Object_340.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_341.geometry} material={materials.dark_wood} />
            </group>
            <group position={[9.319, 16.511, -24.761]} rotation={[0, -0.262, Math.PI]} scale={[-0.167, 1.273, 0.05]}>
              <mesh geometry={nodes.Object_343.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_344.geometry} material={materials.dark_wood} />
            </group>
            <group position={[7.545, 17.55, -23.387]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[-0.265, 2.014, 0.08]}>
              <mesh geometry={nodes.Object_346.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_347.geometry} material={materials.dark_wood} />
            </group>
            <group position={[13.852, 5.221, 3.088]} scale={[1, 0.703, 1]}>
              <mesh geometry={nodes.Object_349.geometry} material={materials.dark_stone_2} />
              <mesh geometry={nodes.Object_350.geometry} material={materials.light_stone_3} />
            </group>
            <group position={[5.802, 16.511, -26]} rotation={[0, 0.436, Math.PI]} scale={[-0.167, 1.273, 0.05]}>
              <mesh geometry={nodes.Object_354.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_355.geometry} material={materials.dark_wood} />
            </group>
            <group position={[-0.029, 16.958, -14.564]} scale={2.402}>
              <mesh geometry={nodes.Object_357.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_358.geometry} material={materials.Metal} />
            </group>
            <group position={[-17.076, 28.565, -19.102]} rotation={[Math.PI, -1.121, Math.PI]} scale={[5.719, 4.496, 1]}>
              <mesh geometry={nodes.Object_364.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_365.geometry} material={materials.light_stone_3} />
            </group>
            <group position={[26.231, 28.565, 7.902]} rotation={[0, 0.5, 0]} scale={[-5.719, 4.496, 1]}>
              <mesh geometry={nodes.Object_367.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_368.geometry} material={materials.light_stone_3} />
            </group>
            <group position={[3.921, 32.342, 7.679]} rotation={[0, -0.217, 0]} scale={[0.51, 0.377, 0.51]}>
              <mesh geometry={nodes.Object_376.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_377.geometry} material={materials.light_stone_3} />
            </group>
            <group position={[-9.989, 28.197, 2.852]} rotation={[-Math.PI, 0.611, -Math.PI]} scale={[-0.301, 2.288, 0.09]}>
              <mesh geometry={nodes.Object_383.geometry} material={materials.wood} />
              <mesh geometry={nodes.Object_384.geometry} material={materials.Metal} />
            </group>
            <group position={[2.294, 8.411, 11.229]} scale={[1, 5.008, 1]}>
              <mesh geometry={nodes.Object_390.geometry} material={materials.dark_stone_2} />
              <mesh geometry={nodes.Object_391.geometry} material={materials.wood} />
            </group>
            <group position={[16.592, 32.352, 7.935]} rotation={[0, -0.009, 0]} scale={[0.51, 0.377, 0.51]}>
              <mesh geometry={nodes.Object_393.geometry} material={materials.medium_stone_1} />
              <mesh geometry={nodes.Object_394.geometry} material={materials.light_stone_3} />
            </group>
            <mesh geometry={nodes.Object_4.geometry} material={materials.green} position={[22.77, 28.668, -7.519]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={2.851} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.green} position={[28.206, 25.673, -9.502]} rotation={[-2.79, -0.722, -2.832]} scale={7.445} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.green} position={[30.509, 25.673, -3.658]} rotation={[-2.128, -1.261, -2.079]} scale={10.741} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.green} position={[-15.326, 26.637, -27.93]} scale={5.741} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.green} position={[-8.114, 25.294, -27.159]} scale={5.741} />
            <mesh geometry={nodes.Object_14.geometry} material={materials.green} position={[-2.68, 24.968, 9.426]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={3.312} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.green} position={[-4.267, 24.968, 10.901]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={4.398} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.green} position={[-14.823, 24.968, 18.649]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={4.398} />
            <mesh geometry={nodes.Object_20.geometry} material={materials.green} position={[-16.376, 24.968, 17.12]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={4.398} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.green} position={[-14.514, 31.423, -8.852]} rotation={[1.678, 1.16, -0.259]} scale={1.083} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.green} position={[-8.689, 31.423, -16.467]} rotation={[2.733, 0.037, -1.697]} scale={1.083} />
            <mesh geometry={nodes.Object_26.geometry} material={materials.green} position={[-8.76, 29.777, -16.038]} rotation={[2.733, 0.037, -1.697]} scale={1.083} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.green} position={[-8.849, 28.268, -15.139]} rotation={[2.73, 0.118, -1.663]} scale={0.58} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.green} position={[5.53, 25.294, -9.276]} rotation={[Math.PI, -1.526, Math.PI]} scale={0.947} />
            <mesh geometry={nodes.Object_32.geometry} material={materials.green} position={[5.758, 28.952, -8.143]} rotation={[2.174, -1.067, -2.618]} scale={0.58} />
            <mesh geometry={nodes.Object_34.geometry} material={materials.green} position={[6.443, 30.11, -8.117]} rotation={[2.174, -1.067, -2.618]} scale={1.083} />
            <mesh geometry={nodes.Object_36.geometry} material={materials.green} position={[20.003, 29.803, 0.043]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={4.398} />
            <mesh geometry={nodes.Object_38.geometry} material={materials.green} position={[13.098, 29.845, -0.596]} rotation={[2.775, -0.357, 2.548]} scale={5.741} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.green} position={[21.534, 25.673, -6.071]} rotation={[-2.79, -0.722, -2.832]} scale={7.445} />
            <mesh geometry={nodes.Object_42.geometry} material={materials.green} position={[22.981, 25.673, 3.218]} rotation={[-2.79, -0.722, -2.832]} scale={10.741} />
            <mesh geometry={nodes.Object_44.geometry} material={materials.green} position={[14.889, 25.852, 3.226]} rotation={[-2.119, -1.206, -2.406]} scale={12.122} />
            <mesh geometry={nodes.Object_46.geometry} material={materials.green} position={[8.569, 25.294, 9.846]} rotation={[-3.104, -0.833, -2.972]} scale={12.122} />
            <mesh geometry={nodes.Object_48.geometry} material={materials.green} position={[1.312, 25.294, 6.481]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={6.957} />
            <mesh geometry={nodes.Object_50.geometry} material={materials.green} position={[16.776, 25.673, 3.218]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={8.422} />
            <mesh geometry={nodes.Object_52.geometry} material={materials.green} position={[12.88, 30.437, 1.352]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={5.741} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.green} position={[14.216, 25.294, -2.131]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={6.957} />
            <mesh geometry={nodes.Object_56.geometry} material={materials.green} position={[17.26, 25.294, -13.028]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={2.851} />
            <mesh geometry={nodes.Object_58.geometry} material={materials.green} position={[13.302, 25.294, -6.871]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={4.398} />
            <mesh geometry={nodes.Object_60.geometry} material={materials.green} position={[16.636, 25.294, -8.496]} rotation={[-Math.PI, -0.611, -Math.PI]} scale={5.741} />
            <mesh geometry={nodes.Object_62.geometry} material={materials.green} position={[-15.003, 27.783, -10.211]} scale={3.199} />
            <mesh geometry={nodes.Object_64.geometry} material={materials.green} position={[-12.9, 25.047, -8.379]} rotation={[0, Math.PI / 4, 0]} scale={3.322} />
            <mesh geometry={nodes.Object_66.geometry} material={materials.green} position={[-14.67, 25.047, -6.034]} rotation={[0, Math.PI / 4, 0]} scale={3.322} />
            <mesh geometry={nodes.Object_68.geometry} material={materials.green} position={[-14.824, 25.294, -10.877]} scale={5.741} />
            <mesh geometry={nodes.Object_70.geometry} material={materials.green} position={[-8.006, 25.294, -22.203]} scale={5.741} />
            <mesh geometry={nodes.Object_72.geometry} material={materials.green} position={[-8.006, 25.294, -18.938]} scale={4.398} />
            <mesh geometry={nodes.Object_74.geometry} material={materials.green} position={[-3.793, 25.294, -18.497]} scale={2.851} />
            <mesh geometry={nodes.Object_79.geometry} material={materials.emission_2} position={[-2.767, 28.751, 34.666]} rotation={[-Math.PI, 0, -2.967]} scale={[-0.05, 0.05, 0.05]} />
            <mesh geometry={nodes.Object_90.geometry} material={materials.dark_wood} position={[12.583, 25.727, 11.921]} rotation={[0, 0, 0.175]} scale={[0.057, 0.61, 0.072]} />
            <mesh geometry={nodes.Object_197.geometry} material={materials.wood} position={[1.957, 31.332, -9.265]} rotation={[Math.PI / 2, 0, 2.443]} scale={[0.087, 0.599, 0.072]} />
            <mesh geometry={nodes.Object_202.geometry} material={materials.wood} position={[-13.474, 31.542, 1.12]} rotation={[Math.PI / 2, 0, 0.611]} scale={[-0.089, 0.615, 0.072]} />
            <mesh geometry={nodes.Object_214.geometry} material={materials.dark_wood} position={[-9.31, 31.542, 4.091]} rotation={[Math.PI / 2, 0, 0.698]} scale={[0.089, 0.615, 0.072]} />
            <mesh geometry={nodes.Object_235.geometry} material={materials.light_stone_3} position={[-16.811, 12.073, 16.913]} rotation={[-Math.PI, 0.023, -Math.PI]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_237.geometry} material={materials.light_stone_3} position={[-16.811, 12.073, 1.276]} rotation={[-Math.PI, 0.023, -Math.PI]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_239.geometry} material={materials.light_stone_3} position={[-16.811, 12.073, -6.637]} rotation={[0, 0.023, 0]} scale={[-0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_241.geometry} material={materials.light_stone_3} position={[-16.811, 12.073, -15.477]} rotation={[0, 0.023, 0]} scale={[-0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_243.geometry} material={materials.light_stone_3} position={[-16.811, 12.073, -7.565]} rotation={[-Math.PI, 0.023, -Math.PI]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_245.geometry} material={materials.light_stone_3} position={[-16.811, 12.073, -16.4]} rotation={[-Math.PI, 0.023, -Math.PI]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_247.geometry} material={materials.light_stone_3} position={[1.458, 6.779, 16.991]} rotation={[-Math.PI, 0.01, -Math.PI]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_249.geometry} material={materials.light_stone_3} position={[-1.371, 17.568, 16.904]} rotation={[-Math.PI, 0.023, -Math.PI]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_251.geometry} material={materials.light_stone_3} position={[-8.047, 16.927, 8.681]} rotation={[0, 0.919, 0]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_253.geometry} material={materials.light_stone_3} position={[13.347, 18.374, 14.455]} rotation={[0, -1.561, 0]} scale={[-0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_255.geometry} material={materials.light_stone_3} position={[-1.371, 17.568, 3.764]} rotation={[0, 0.023, 0]} scale={[-0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_257.geometry} material={materials.light_stone_3} position={[-4.588, 18.374, -8.885]} rotation={[Math.PI, 1.563, -Math.PI]} scale={[-0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_259.geometry} material={materials.light_stone_3} position={[-5.712, 21.607, -0.701]} rotation={[0, -1.548, 0]} scale={[-0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_261.geometry} material={materials.material_0} position={[13.611, 18.374, -8.885]} rotation={[Math.PI, -1.563, Math.PI]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_263.geometry} material={materials.light_stone_3} position={[14.315, 18.374, 14.455]} rotation={[0, 1.561, 0]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_265.geometry} material={materials.light_stone_3} position={[-1.289, 17.568, -11.302]} rotation={[0, 0.023, 0]} scale={[-0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_267.geometry} material={materials.light_stone_3} position={[-1.289, 17.568, 2.616]} rotation={[-Math.PI, 0.023, -Math.PI]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_269.geometry} material={materials.light_stone_3} position={[-18.017, 18.374, 13.78]} rotation={[0, 1.548, 0]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_271.geometry} material={materials.light_stone_3} position={[-18.123, 25.173, -18.427]} rotation={[-1.572, -0.001, 2.347]} scale={[0.278, 0.206, 0.278]} />
            <mesh geometry={nodes.Object_279.geometry} material={materials.Metal} position={[9.926, 25.138, -23.572]} rotation={[0, 0, Math.PI / 2]} scale={[-0.205, 0.205, 2.664]} />
            <mesh geometry={nodes.Object_287.geometry} material={materials.material_0} position={[-9.311, 25.164, -9.331]} rotation={[-1.569, -0.001, -2.003]} scale={[0.216, 0.16, 0.216]} />
            <mesh geometry={nodes.Object_298.geometry} material={materials.water} position={[14.966, 24.372, 15.138]} scale={[11.687, 0.811, 3.056]} />
            <mesh geometry={nodes.Object_307.geometry} material={materials.material_0} position={[9.75, 25.157, -11.769]} rotation={[-1.59, 0.027, -2.526]} scale={[0.212, 0.157, 0.212]} />
            <mesh geometry={nodes.Object_309.geometry} material={materials.light_stone_3} position={[-16.811, 12.073, -25.178]} rotation={[0, 0.023, 0]} scale={[-0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_315.geometry} material={materials.material_0} position={[9.048, 25.173, -9.749]} rotation={[-1.572, -0.002, 2.443]} scale={[0.205, 0.151, 0.205]} />
            <mesh geometry={nodes.Object_320.geometry} material={materials.light_stone_3} position={[-16.811, 12.073, -25.832]} rotation={[-Math.PI, 0.023, -Math.PI]} scale={[0.51, 0.377, 0.51]} />
            <mesh geometry={nodes.Object_352.geometry} material={materials.light_stone_3} position={[-10.105, 5.34, 10.361]} scale={[1, 0.703, 1]} />
            <mesh geometry={nodes.Object_360.geometry} material={materials.medium_stone_1} position={[-11.286, 13.905, -28.366]} rotation={[0, 1.536, 0]} scale={[9.01, 1, 0.824]} />
            <mesh geometry={nodes.Object_362.geometry} material={materials.medium_stone_1} position={[-10.204, 4.652, -15.268]} rotation={[0, Math.PI / 2, 0]} scale={[9.01, 0.759, 0.824]} />
            <mesh geometry={nodes.Object_370.geometry} material={materials.Metal} position={[-10.165, 9.538, -20.279]} scale={[0.173, 0.173, 2.256]} />
            <mesh geometry={nodes.Object_372.geometry} material={materials.light_stone_3} position={[-11.508, 16.378, -19.923]} scale={[1, 0.761, 1]} />
            <mesh geometry={nodes.Object_374.geometry} material={materials.medium_stone_1} position={[-11.514, 13.905, 12.052]} rotation={[0, 0.938, 0]} scale={[9.01, 1, 0.824]} />
            <mesh geometry={nodes.Object_379.geometry} material={materials.light_stone_3} position={[14.149, 16.378, -11.938]} scale={[1, 0.761, 1]} />
            <mesh geometry={nodes.Object_381.geometry} material={materials.Metal} position={[6.502, 19.158, -11.875]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.226, 0.226, 2.944]} />
            <mesh geometry={nodes.Object_386.geometry} material={materials.light_stone_3} position={[-14.681, 18.902, -24.619]} scale={[3.489, 4.689, 4.6]} />
            <mesh geometry={nodes.Object_388.geometry} material={materials.Metal} position={[13.655, 18.492, 11.724]} rotation={[Math.PI / 2, 0, 0]} scale={[0.226, 0.226, 2.944]} />
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/models/castle.glb')
