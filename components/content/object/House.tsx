import { Sparkles, useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { isHouseStore } from "../store"

export const House = (props)=> {
    const texture1 = useTexture('/stickers/house.png');
    const { position } = props;
    const { setHouse } = isHouseStore();

    return(
        <group position={position}>
            <mesh position={[0,1.9,1.1]}>
                <planeGeometry args={[7,7]} />
                <meshBasicMaterial map={texture1} transparent side={2} alphaTest={0.5}/>
            </mesh>
            <RigidBody type="fixed" colliders="cuboid" onCollisionEnter={()=> setHouse(true)}>
                <mesh>
                    <boxGeometry args={[5,6,2]}/>
                    <meshToonMaterial color={"rgb(144, 144, 144)"}/>
                </mesh>
            </RigidBody>
            <Sparkles position={[0,1,2]} count={50} scale={[4,4,2]} size={20} speed={0.4} color={"#eff8fc"}/>
        </group>
    )
}