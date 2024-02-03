import { Outlines } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRouter } from "next/router"

export const Portal = ({position, path = "/"}) => {
    const router = useRouter()

    return(
        <RigidBody onCollisionEnter={()=> router.push(path)} position={position} colliders="cuboid" type="fixed">
            <mesh>
                <boxGeometry args={[0.5,2,2]}/>
                <meshToonMaterial color="yellow" />
                <Outlines color={"black"}/>
            </mesh>
        </RigidBody>
    )
}