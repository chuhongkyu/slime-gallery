import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import SceneGame from "../SceneGame";
import { SlimeAbility } from "../SlimeAbility";
import { EcctrlJoystick } from "../ecctrl/EcctrlJoystick";
import KeyPad from "../KeyPad";
import { World } from "../World";
import { Wall } from "../object/Wall";
import { Castle } from "../object/Castle";

const Scene02 = () => {
    return(
        <>
            <EcctrlJoystick />
            <Canvas shadows>
                <color attach="background" args={["#55d9fa"]} /> 
                <fog attach="fog" args={["#55d9fa", 15, 30]} />
                <Suspense fallback={null}>
                    <Physics timeStep="vary">
                        <SceneGame>
                            <Wall/>
                            <Castle/>
                            <World />
                        </SceneGame>
                    </Physics>
                </Suspense>
            </Canvas>
            <SlimeAbility/>
            <KeyPad/>
        </>
    )
}

export default Scene02;