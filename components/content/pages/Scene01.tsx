import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import SceneGame from "../SceneGame";
import { SlimeAbility } from "../SlimeAbility";
import { EcctrlJoystick } from "../ecctrl/EcctrlJoystick";
import KeyPad from "../KeyPad";
import { Map } from "../Map";
import { WallOne } from "../object/WallOne";
import { Ground } from "../object/Ground";
import ObstacleSpinner from "../object/Obstacle";

const Scene01 = () => {
    return(
        <>
            <EcctrlJoystick />
            <Canvas shadows>
                <color attach="background" args={["#55d9fa"]} /> 
                <fog attach="fog" args={["#55d9fa", 15, 30]} />
                <Suspense fallback={null}>
                    <Physics timeStep="vary">
                        <SceneGame>
                            <Map/>
                            <WallOne/>
                            <Ground/>
                            <ObstacleSpinner position={[10,0,-15]} speed={1} />
                        </SceneGame>
                    </Physics>
                </Suspense>
            </Canvas>
            <SlimeAbility/>
            <KeyPad/>
        </>
    )
}

export default Scene01;