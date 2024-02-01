import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import SceneGame from "./SceneGame";
import { SlimeAbility } from "./SlimeAbility";

export const Controls = {
    forward: "forward",
    back: "back",
    left: "left",
    right: "right",
    jump: "jump",
};

const Scene = () => {
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
                <Canvas shadows camera={{ position: [0, 4.5, 10], fov: 42, zoom: 1.2 }}>
                    <color attach="background" args={["#55d9fa"]} />
                    <fog attach="fog" args={["#55d9fa", 15, 30]} />
                    <Suspense fallback={null}>
                        <Physics debug={false}>
                            <SceneGame />
                        </Physics>
                    </Suspense>
                </Canvas>
            </KeyboardControls>
            <SlimeAbility/>
        </>
    )
}

export default Scene;