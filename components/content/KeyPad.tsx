import { motion } from "framer-motion"

const KeyPad = () => {
    return(
        <motion.div
            initial={{ opacity: 1}}
            animate={{ opacity: [1,0.2], transition: { duration: 0.5}}}
            whileHover={{ opacity: 1}}
            className="controlKeys">
            <img src="/keyControls.png"/>
        </motion.div>
    )
}

export default KeyPad