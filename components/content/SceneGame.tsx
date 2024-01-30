import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { SlimeController } from "./SlimeController"
import Lights from "./Lights"
import { NormalSlime } from "./npc/NormalSlime"
import { Wall } from "./object/Wall"
import { ContactShadows } from "@react-three/drei"

const SceneGame = () => {
    return(
        <>
            <Lights/>
            <group position-y={-1} receiveShadow>
                {/* Ground */}
                <mesh receiveShadow rotation-x={-Math.PI/2}>
                    <planeGeometry args={[100,100]}/>
                    <meshStandardMaterial color={"rgb(114, 211, 17)"}/>
                </mesh>
                <CuboidCollider position={[0, -1, 0]} args={[100, 1, 100]} />
                
                <SlimeController />

                <NormalSlime position={[0,0,-5]} imgUrl={"/kingslime.png"}/>
                <NormalSlime position={[6,0,-4]} imgUrl={"/ninza.png"}/>
                <NormalSlime position={[-6,0,-3.5]} imgUrl={"/police.png"}/>

                <Wall position={[0,0,-10]}/>
            </group>
        </>
    )
}

export default SceneGame;