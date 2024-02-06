import { useTexture } from "@react-three/drei"
import { BallCollider } from "@react-three/rapier"
import { motion } from 'framer-motion-3d'

export const Firewood = (props)=> {
    const texture = useTexture('/fire.png')
    return(
        <group {...props}>
            <motion.mesh
            initial={{x: 0, y: -0.18, z: 0.1}}
            animate={{y: [-0.15,-0.18, -0.15], transition: {duration: 3, repeat: Infinity}}}>
                <planeGeometry args={[1.5,1.5]} />
                <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
            </motion.mesh>
            <motion.mesh 
            initial={{x: 0, y: -0.1, z: 0}}
            animate={{y: [-0.1,-0.12,-0.1], transition: {duration: 3, repeat: Infinity}}}>
                <planeGeometry args={[1.59,1.59]} />
                <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
            </motion.mesh>
            <BallCollider restitution={2} args={[0.5]}/>
            <motion.mesh 
            initial={{x: 0, y: -0.1, z: -0.2}}
            animate={{y: [-0.1,-0.12,-0.1], transition: {duration: 3, repeat: Infinity}}}
            >
                <planeGeometry args={[1.5,1.5]} />
                <meshBasicMaterial map={texture} transparent side={2} alphaTest={0.5}/>
            </motion.mesh>
        </group>
    )
}