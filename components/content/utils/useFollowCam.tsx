import { useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { Object3D } from 'three'

const useFollowCam = () => {
  const { scene, camera } = useThree()
  const pivot = useMemo(() => new Object3D(), [])

  const makeCamera = ()=>{
    camera.position.set(0,5,10)

    pivot.add(camera)
    scene.add(pivot)
  }

  useEffect(() => {
    makeCamera()
  }, [])

  return { pivot }
}


export default useFollowCam;