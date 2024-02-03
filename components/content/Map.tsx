import { NormalSlime } from "./npc/NormalSlime"
import { House } from "./object/House"
import { Room1 } from "./object/Room01"

export const Map = () => {
    return(
        <>
            <NormalSlime position={[-10,-1,-2]} imgUrl={"/ninza.png"}/>
            <House position={[-5, 0, -9]}/>
            <House position={[15, 0, 10]}/>
            <Room1 position={[-38, 1, -13]}/>
        </>
    )
}
