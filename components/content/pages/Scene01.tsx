import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import { SlimeAbility } from "../SlimeAbility";
import SceneGame from "../SceneGame";
import { Map } from "../Map";
import { Wall } from "../object/Wall";
import { Castle } from "../object/Castle";

export const Controls = {
    forward: "forward",
    back: "back",
    left: "left",
    right: "right",
    jump: "jump",
};

const Scene01 = () => {
    const map = useMemo(
        () => [
          { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
          { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
          { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
          { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
          { name: Controls.jump, keys: ["Space"] },
        ],
        []
    );
    return(
        <>
            <KeyboardControls map={map}>
                <Canvas shadows camera={{ position: [3, 5, 8], fov: 42, }}>
                    <color attach="background" args={["#55d9fa"]} />
                    <fog attach="fog" args={["#55d9fa", 15, 30]} />
                    <Suspense fallback={null}>
                        <Physics debug={false}>
                            <SceneGame>
                                <Map/>
                                <Wall/>
                                <Castle/>
                            </SceneGame>
                        </Physics>
                    </Suspense>
                </Canvas>
            </KeyboardControls>
            <SlimeAbility/>
        </>
    )
}

export default Scene01;