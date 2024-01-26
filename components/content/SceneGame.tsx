import { CylinderCollider, RigidBody } from "@react-three/rapier"
import { SlimeController } from "./SlimeController"
import { Cylinder } from "@react-three/drei"
import Lights from "./Lights"

const SceneGame = () => {
    return(
        <>
            <Lights/>
            <group position-y={-1}>
                <RigidBody
                    colliders={false}
                    type="fixed"
                    position-y={-0.5}
                    friction={2}
                >
                    <CylinderCollider args={[1 / 2, 5]} />
                    <Cylinder scale={[5, 1, 5]} receiveShadow>
                        <meshStandardMaterial color="white" />
                    </Cylinder>
                </RigidBody>

                <SlimeController />
            </group>
        </>
    )
}

export default SceneGame;