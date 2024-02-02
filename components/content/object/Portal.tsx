import { RigidBody } from "@react-three/rapier"
import { useRouter } from "next/router"

export const Portal = ({position, path = "/"}) => {
    const router = useRouter()
    return(
        <RigidBody onCollisionEnter={()=> router.push(path)} position={position} colliders="cuboid" type="fixed">
            <mesh>
                <boxGeometry args={[1,1,1]}/>
                <meshToonMaterial color="yellow" />
            </mesh>
        </RigidBody>
    )
}