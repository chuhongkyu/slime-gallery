import { NormalSlime } from "./npc/NormalSlime"
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
        </>
    )
}
