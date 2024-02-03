import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function ObstacleSpinner({ speed = 1, initialShift = Math.random() * 10, invert = false, ...props }) {
    const rigidBodyRef = useRef(null);

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, (time * speed + initialShift) * (invert ? -1 : 1), 0))
        rigidBodyRef?.current?.setNextKinematicRotation(rotation)
    })

    return(
        <RigidBody ref={rigidBodyRef} type="kinematicPosition" restitution={2} friction={1} {...props}>
            <mesh castShadow position={[2.5,0,0]}>
                <boxGeometry args={[5, 0.5, 0.5]} />
                <meshStandardMaterial color="#A876F5" />
            </mesh>
        </RigidBody>
    )
}

export default ObstacleSpinner