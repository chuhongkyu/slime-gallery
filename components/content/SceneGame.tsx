import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { SlimeController } from "./SlimeController"
import Lights from "./Lights"
import { NormalSlime } from "./npc/NormalSlime"
import { Wall } from "./object/Wall"
import { Assets } from "./object/Assets"
import { Map } from "./Map"

const SceneGame = () => {
    return(
        <>
            <Lights />
            <group position-y={-1} receiveShadow>
                {/* Ground */}
                <mesh receiveShadow rotation-x={-Math.PI/2} position={[50,0,-5]}>
                    <planeGeometry args={[150,40]}/>
                    <meshStandardMaterial color={"rgb(114, 211, 17)"}/>
                </mesh>
                <CuboidCollider name="floor" position={[0, -1, 0]} args={[150, 1, 40]} />
        
                {/* <NormalSlime position={[0,0,-5]} imgUrl={"/king-slime.png"}/>
                <NormalSlime position={[6,0,-4]} imgUrl={"/ninza.png"}/>
                <NormalSlime position={[-6,0,-3.5]} imgUrl={"/police.png"}/> */}
                <Map/>
                <Wall/>
                <Assets />
            </group>
            <SlimeController />
        </>
    )
}

export default SceneGame;