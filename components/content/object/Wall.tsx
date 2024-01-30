import { RigidBody } from "@react-three/rapier"

export const Wall = (props) => {
    return(
        <group {...props}>
            <RigidBody position={[0, 1, 0]} colliders="cuboid" type="fixed">
                <mesh castShadow>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="rgb(197, 15, 207)"/>
                </mesh>
            </RigidBody>
        </group>
    )
}