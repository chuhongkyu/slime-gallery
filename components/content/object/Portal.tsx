import { Sparkles } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRouter } from "next/router"

export const Portal = ({position, path = "/"}) => {
    const router = useRouter()

    return(
        <RigidBody onCollisionEnter={()=> router.push(path)} position={position} colliders="cuboid" type="fixed">
            <mesh>
                <boxGeometry args={[0.5,2,2]}/>
                <meshStandardMaterial color={"yellow"} transparent opacity={0} />
            </mesh>
            <Sparkles position={[0,-0.5,0]} count={40} scale={[4,4,2]} size={10} speed={0.4} color={"#eff8fc"}/>
        </RigidBody>
    )
}