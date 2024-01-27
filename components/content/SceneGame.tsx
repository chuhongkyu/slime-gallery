import { RigidBody } from "@react-three/rapier"
import { SlimeController } from "./SlimeController"
import Lights from "./Lights"

const SceneGame = () => {
    return(
        <>
            <Lights/>
            <group position-y={-1}>
                {/* Ground */}
                <RigidBody
                type="fixed"
                position-y={-0.1 / 2}
                rotation={[-Math.PI / 2, 0, 0]}
                >
                <mesh receiveShadow>
                    <boxGeometry args={[100, 100, 0.1]} />
                    <meshStandardMaterial color="rgb(139, 142, 76)" transparent opacity={0.8} />
                </mesh>
                </RigidBody>

                <SlimeController />
            </group>
        </>
    )
}

export default SceneGame;