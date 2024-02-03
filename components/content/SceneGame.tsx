import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { SlimeController } from "./SlimeController"
import Lights from "./Lights"
import { Ground } from "./object/Ground"
import ObstacleSpinner from "./object/Obstacle"

const SceneGame = ({children}) => {
    return(
        <>
            <Lights />
            <group position-y={-1} receiveShadow>
                
                {/* <NormalSlime position={[0,0,-5]} imgUrl={"/king-slime.png"}/>
                <NormalSlime position={[6,0,-4]} imgUrl={"/ninza.png"}/>
                <NormalSlime position={[-6,0,-3.5]} imgUrl={"/police.png"}/> */}
                {children}
            </group>
            <SlimeController />
        </>
    )
}

export default SceneGame;