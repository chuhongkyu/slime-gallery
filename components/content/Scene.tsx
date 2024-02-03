import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import SceneGame from "./SceneGame";
import { SlimeAbility } from "./SlimeAbility";
import { Wall } from "./object/Wall";
import { Map } from "./Map";
import { Portal } from "./object/Portal";
import { WallOne } from "./object/WallOne";
import ObstacleSpinner from "./object/Obstacle";
import { Ground } from "./object/Ground";

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
                <Canvas camera={{ position: [3, 5, 8], fov: 42, }}>
                    <color attach="background" args={["#55d9fa"]} /> 
                    <fog attach="fog" args={["#55d9fa", 15, 30]} />
                    <Suspense fallback={null}>
                        <Physics debug>
                            <SceneGame>
                                <Map/>
                                <WallOne/>
                                <Ground/>
                                <ObstacleSpinner position={[5,0,-10]} speed={1} />
                                <Portal position={[18,1.1,-2]} path={"/content/onepage"}/>
                            </SceneGame>
                        </Physics>
                    </Suspense>
                </Canvas>
            </KeyboardControls>
            <SlimeAbility/>
        </>
    )
}

export default Scene;