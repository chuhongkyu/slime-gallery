import { useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { isHouseStore } from "../store"

export const House = (props)=> {
    const texture = useTexture('/stickers/house.png')
    const { position } = props;
    const { setHouse } = isHouseStore();

    return(
        <group position={position}>
            <mesh position={[0,1.9,1.1]}>
                <planeGeometry args={[7,7]} />
                <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
            </mesh>
            <RigidBody type="fixed" colliders="cuboid" onCollisionEnter={()=> setHouse(true)}>
                <mesh>
                    <boxGeometry args={[5,6,2]}/>
                    <meshToonMaterial color={"rgb(144, 144, 144)"}/>
                </mesh>
            </RigidBody>
        </group>
    )
}