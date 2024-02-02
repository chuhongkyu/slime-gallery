import { NextPage } from "next";
import { motion } from "framer-motion"
import Header from "../../../components/Header";
import Scene01 from "../../../components/content/pages/Scene01";

const OnePage: NextPage = () => {
    return(
        <>
            <Header/>
            <motion.main 
                className="w-full h-screen" 
                initial={{ backgroundColor: "rgb(0,0,0)"}} 
                animate={{ backgroundColor: "rgb(255,255,255)", transition:{ delay: 0.5, ease: "easeInOut" }}}
            >
                <Scene01 />
            </motion.main>
        </>
    )
}

export default OnePage;