import { NextPage } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion"
import { useSlimeStore } from "../../components/content/store";

const Scene = dynamic(() => import('../../components/content/Scene'), {ssr: false})

const Content: NextPage = () => {
    const imageUrl = useSlimeStore(state => state.imageUrl);
    return(
        <motion.main 
          className="w-full h-screen" 
          initial={{ backgroundColor: "rgb(0,0,0)"}} 
          animate={{ backgroundColor: "rgb(255,255,255)", transition:{ delay: 0.5, ease: "easeInOut" }}}>
            <Scene />
            <motion.div animate={{scale: [1,1,0.8,0.6,0.4,0.2,0.2,0.2,0], transition: {duration: 1.5, ease: "linear"}}} className="w-full h-screen fixed top-0 left-0 flex justify-center">
                <Image
                    alt="Photo-slime"
                    className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    src={imageUrl}
                    width={720}
                    height={480}
                    sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
            </motion.div>
        </motion.main>
    )
}

export default Content;