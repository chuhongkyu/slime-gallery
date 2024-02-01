import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useMemo, useRef } from "react";
import Slime from "./Slime";
import { Controls } from "./Scene";
import useFollowCam from "./utils/useFollowCam";
import { Vector3 } from "three";

const JUMP_FORCE = 2.5;
const MOVEMENT_SPEED = 0.2;
const MAX_VEL = 3;

export const SlimeController = () => {
  const { pivot } = useFollowCam();
  const worldPosition = useMemo(() => new Vector3(), [])

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

  const makeFollowCam = ()=> {
    character?.current.getWorldPosition(worldPosition)
    pivot.position.lerp(worldPosition, 0.9)
  }

  const checkOnFloor = (e) => {
    const { other } = e;
    if(other.colliderObject.name == "floor"){
      isOnFloor.current = true;
    }
  }

  useFrame(() => {
    const impulse = { x: 0, y: 0, z: 0 };
    if (jumpPressed && isOnFloor.current) {
      impulse.y += JUMP_FORCE;
      isOnFloor.current = false;
    }

    const linvel = rigidbody.current.linvel();
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

    rigidbody.current.applyImpulse(impulse, true);
    if (changeRotation) {
      let angle = 0;
      if (rightPressed) {
        angle = Math.PI;
      }
      character.current.rotation.y = angle;
    }
    makeFollowCam()
  });

  return (
    
    <group>
      <RigidBody
        ref={rigidbody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        enabledRotations={[false, false, false]}
        onCollisionEnter={(e) => checkOnFloor(e)}
      >
        <CapsuleCollider args={[0.4, 0.8]} position={[0, 1.2, 0]} />
        <group ref={character}>
          <Slime jumpPressed={jumpPressed}/>
        </group>
      </RigidBody>
    </group>
    
  );
};