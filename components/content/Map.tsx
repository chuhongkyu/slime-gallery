import { NormalSlime } from "./npc/NormalSlime"
import { ProtectSlime } from "./npc/ProtectSlime"
import { Firewood } from "./object/Firewood"
import { FloatCastle } from "./object/Floating_castle"
import { House } from "./object/House"
import { Room } from "./object/Room"
import { Tree } from "./object/Tree"

export const Map = () => {
    return(
        <>
            <NormalSlime position={[-10,-1,-2]} imgUrl={"/ninza.png"}/>
            <House position={[-5, 0, -9]}/>
            <House position={[15, 0, 10]}/>
            <Room position={[-34, 2, -16]}/>
            <Tree position={[0,-1,-20]}/>
            <FloatCastle position={[16,0,-3]}/>
            <ProtectSlime position={[13,4,-2]}/>
            <ProtectSlime position={[16,6,-5]}/>
            <Firewood position={[0,-0.2,5]}/>
        </>
    )
}
