import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import SceneGame from "./SceneGame";
import { SlimeAbility } from "./SlimeAbility";
import { EcctrlJoystick } from "./ecctrl/EcctrlJoystick";
import KeyPad from "./KeyPad";
import { World } from "./World";
import { Portal } from "./object/Portal";

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
                            <World />
                            <Portal position={[-13,1.5,-16]} path={"/content/onepage"}/>
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