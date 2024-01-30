import { RigidBody } from "@react-three/rapier"
import { SlimeController } from "./SlimeController"
import Lights from "./Lights"
import { NormalSlime } from "./npc/NormalSlime"

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
                <mesh>
                    <boxGeometry args={[100, 100, 0.1]} />
                    <meshStandardMaterial color="rgb(139, 142, 76)" transparent opacity={0.8} />
                </mesh>
                </RigidBody>

                <SlimeController />

                <NormalSlime position={[0,0,-5]} imgUrl={"/kingslime.png"}/>
                <NormalSlime position={[6,0,-4]} imgUrl={"/ninza.png"}/>
                <NormalSlime position={[-6,0,-3.5]} imgUrl={"/police.png"}/>
            </group>
        </>
    )
}

export default SceneGame;