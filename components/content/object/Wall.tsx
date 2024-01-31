import { RigidBody } from "@react-three/rapier"

export const Wall = () => {
    return(
        <group>
            <RigidBody position={[23, 1.5,-15]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[100, 3, 5]} />
                    <meshBasicMaterial transparent opacity={0}/>
                </mesh>
            </RigidBody>
            <RigidBody position={[-12, 1.5, -5]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[1, 3, 25]} />
                    <meshBasicMaterial transparent opacity={0}/>
                </mesh>
            </RigidBody>
            <RigidBody position={[23, 1.5, 10]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[100, 3, 5]} />
                    <meshBasicMaterial transparent opacity={0}/>
                </mesh>
            </RigidBody>
        </group>
    )
}