import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export function SkyBox() {

    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    
    const texture = loader.load([
      "/sky/nx.png",
      "/sky/ny.png",
      "/sky/nz.png",
      "/sky/px.png",
      "/sky/py.png",
      "/sky/pz.png",
    ]);
  

    scene.background = texture;

    return null;
  }
  