import { RigidBody } from "@react-three/rapier"

export const WallOne = () => {
    return(
        <group>
            <RigidBody name="wall" position={[0, 0, -23]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[50, 5, 1]} />
                    <meshBasicMaterial color={"white"} opacity={1}/>
                </mesh>
            </RigidBody>
            <RigidBody name="wall" position={[0, 0, 23]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[50, 4, 1]} />
                    <meshBasicMaterial color={"white"} transparent opacity={0.3}/>
                </mesh>
            </RigidBody>

            <RigidBody name="wall" position={[23, 0, 0]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[1, 5, 50]} />
                    <meshBasicMaterial color={"white"} opacity={1}/>
                </mesh>
            </RigidBody>

            <RigidBody name="wall" position={[-23, 0, 0]} colliders="cuboid" type="fixed">
                <mesh>
                    <boxGeometry args={[1, 5, 50]} />
                    <meshBasicMaterial color={"white"} opacity={1}/>
                </mesh>
            </RigidBody>
        </group>
    )
}