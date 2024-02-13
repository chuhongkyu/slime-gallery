import Lights from "./Lights"
import Ecctrl from "./ecctrl/Ecctrl";
import Slime from "./Slime"
import { Suspense, useEffect, useMemo, useRef } from "react"
import { KeyboardControls } from "@react-three/drei"
import { isHouseStore } from "./store"
import { Vector3 } from "three"

const SceneGame = ({children}) => {
    const map = useMemo(
        () => [
            { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
            { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
            { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
            { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
            { name: 'jump', keys: ['Space'] },
            { name: 'run', keys: ['Shift'] },
        ],
        []
    );

    const isHouse = isHouseStore((state) => state.isHouse);

    const characterRef = useRef(null);

    const newPosition = { x: 35, y: 5, z: 10 }; 
    const resetPosition = { x: 0, y: 1, z: 0 };

    useEffect(()=>{
        if (characterRef?.current) {
          if(isHouse){
            characterRef.current.setTranslation(new Vector3(newPosition.x, newPosition.y, newPosition.z), true);
          }else{
            characterRef.current.setTranslation(new Vector3(resetPosition.x, resetPosition.y, resetPosition.z), true);
          }
        }
      },[isHouse])
    return(
        <>
            <Lights />
            <group rotation={[0,Math.PI,0]} receiveShadow>
                {children}
            </group>
            <Suspense fallback={<capsuleGeometry args={[0.3, 0.7]} />}>
                <KeyboardControls map={map}>
                    <Ecctrl 
                        followLight
                        maxVelLimit={5}
                        capsuleHalfHeight={0.12}
                        capsuleRadius={0.4}
                        autoBalance={false}
                        camInitDir={{x:0.3,y:0,z:0}}
                        camTargetPos={{x:0,y:0.5,z:-1}}
                        camCollision={false}
                        ref={characterRef}
                        >
                            <group position={[0,-1.05,0]}>
                                <Slime />
                            </group>
                    </Ecctrl>
                </KeyboardControls>
            </Suspense>
        </>
    )
}

export default SceneGame;