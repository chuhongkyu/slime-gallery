import { RigidBody } from "@react-three/rapier"

export const Wall = () => {
    return(
        <group>
            <RigidBody name="wall" position={[-5, 1.5, 14]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[25, 50, 1]} />
                    <meshBasicMaterial color={"white"} transparent opacity={0}/>
                </mesh>
            </RigidBody>
            <RigidBody name="wall" position={[0, 1.5, -11]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[35, 50, 1]} />
                    <meshBasicMaterial color={"white"} transparent opacity={0.9}/>
                </mesh>
            </RigidBody>
            <RigidBody name="wall" position={[-15, 1.5, 0]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[1, 50, 30]} />
                    <meshBasicMaterial color={"white"} transparent opacity={1}/>
                </mesh>
            </RigidBody>
            <RigidBody name="wall" position={[11, 1.5, 0]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[1, 50, 30]} />
                    <meshBasicMaterial color={"white"} transparent opacity={0}/>
                </mesh>
            </RigidBody>
        </group>
    )
}