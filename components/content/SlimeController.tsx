import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useMemo, useRef } from "react";
import Slime from "./Slime";
import { Controls } from "./Scene";
import useFollowCam from "./utils/useFollowCam";
import { Vector3 } from "three";
import { motion } from "framer-motion-3d"
import { isHouseStore } from "./store";

const JUMP_FORCE = 0.7;
const MOVEMENT_SPEED = 0.2;
const MAX_VEL = 3;

export const SlimeController = () => {
  const { pivot } = useFollowCam();
  const worldPosition = useMemo(() => new Vector3(), [])

  const isHouse = isHouseStore((state) => state.isHouse);

  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const rigidbody = useRef(null);
  const character = useRef(null);
  const isOnFloor = useRef(true);
  const isOnWall = useRef(false);
  const newPosition = { x: -35, y: 5, z: -10 }; 
  const resetPosition = { x: 0, y: 1, z: 0 };

  const makeFollowCam = ()=> {
    character?.current.getWorldPosition(worldPosition)
    pivot.position.lerp(worldPosition, 0.9)
  }

  const checkOnFloor = (e) => {
    const { other } = e;
    const collider = other.colliderObject.name

    if(collider == "floor"){
      isOnFloor.current = true;
    }else if(collider == "wall"){
      isOnWall.current = true;
    }
  }

  useFrame(() => {
    const impulse = { x: 0, y: 0, z: 0 };
    if (jumpPressed && isOnFloor.current) {
      impulse.y += JUMP_FORCE;
      isOnFloor.current = false;
    }

    const linvel = rigidbody?.current?.linvel();
    let changeRotation = false;
    if (rightPressed && linvel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (leftPressed && linvel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (backPressed && linvel.z < MAX_VEL) {
      impulse.z += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (forwardPressed && linvel.z > -MAX_VEL) {
      impulse.z -= MOVEMENT_SPEED;
      changeRotation = true;
    }

    rigidbody?.current?.applyImpulse(impulse, true);
    if (changeRotation) {
      let angle = 0;
      if (rightPressed) {
        angle = Math.PI;
      }
      character.current.rotation.y = angle;
    }
    makeFollowCam()
  });

  useEffect(()=>{
    if (rigidbody?.current) {
      if(isHouse){
        rigidbody.current.setTranslation(new Vector3(newPosition.x, newPosition.y, newPosition.z), true);
      }else{
        rigidbody.current.setTranslation(new Vector3(resetPosition.x, resetPosition.y, resetPosition.z), true);
      }
    }
  },[isHouse])

  return (
    
    <group>
      <RigidBody
        ref={rigidbody}
        colliders={false}
        enabledRotations={[false, false, false]}
        onCollisionEnter={(e) => checkOnFloor(e)}
      >
        {/* <CuboidCollider args={[0.5,0.5,0.5]} position={[0, 1, 0]} /> */}
        <CapsuleCollider args={[0.25, 0.2]} position={[0, 0.9, 0]} />
        <group ref={character}>
          <Slime jumpPressed={jumpPressed}/>
          {/* 그림자 */}
          {isOnFloor.current && 
            <motion.mesh
              initial={{ scale: 0}}
              animate={{ scale: 1}}
              exit={{scale: 0}}
              rotation={[-Math.PI/2, 0,0]}
              position={[0,0.5,0]} >
                <circleGeometry args={[0.3, 18]} />
                <meshBasicMaterial color="rgb(61, 61, 61)"/>
            </motion.mesh>
          }
        </group>
      </RigidBody>
    </group>
    
  );
};