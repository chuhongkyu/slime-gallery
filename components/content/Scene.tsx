import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useMemo } from "react";
import SceneGame from "./SceneGame";
import { useSlimeStore } from "./store";

export const Controls = {
    forward: "forward",
    back: "back",
    left: "left",
    right: "right",
    jump: "jump",
};

const Scene = ({ img }: { img: string }) => {
    const setSlime = useSlimeStore((state) => state.setSlime);

    useEffect(() => {
        setSlime(img);
    }, [img]);

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
        <KeyboardControls map={map}>
            <Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
                <color attach="background" args={["#55d9fa"]} />
                <fog attach="fog" args={["#55d9fa", 30, 39]} />
                <Suspense>
                <Physics debug>
                    <SceneGame />
                </Physics>
                </Suspense>
            </Canvas>
        </KeyboardControls>
    )
}

export default Scene;