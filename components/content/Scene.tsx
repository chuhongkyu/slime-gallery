import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import SceneGame from "./SceneGame";
import { SlimeAbility } from "./SlimeAbility";
import { Map } from "./Map";
import { EcctrlJoystick } from "./ecctrl/EcctrlJoystick";
import { WallOne } from "./object/WallOne";
import ObstacleSpinner from "./object/Obstacle";
import { Ground } from "./object/Ground";
import KeyPad from "./KeyPad";

const Scene = () => {
    return(
        <>
            <EcctrlJoystick />
            <Canvas shadows>
                <color attach="background" args={["#55d9fa"]} /> 
                <fog attach="fog" args={["#55d9fa", 15, 30]} />
                <Suspense fallback={null}>
                    <Physics debug timeStep="vary">
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

export default Scene;