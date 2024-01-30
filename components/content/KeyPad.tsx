import { Html } from "@react-three/drei"

const KeyPad = () => {
    return(
        <Html>
            <div className="absolute bottom-0 right-0 w-[130px] h-[125px] flex items-center flex-col">
                {/* front */}
                <div className="border-2 border-white w-[30px] h-[30px]"></div>
                <div className="flex gap-2">
                    {/* left */}
                    <div className="border-2 border-white w-[30px] h-[30px]"></div>
                    {/* down */}
                    <div className="border-2 border-white w-[30px] h-[30px]"></div>
                    {/* right */}
                    <div className="border-2 border-white w-[30px] h-[30px]"></div>
                </div>
                {/* jump */}
                <div className="border-2 border-white w-[130px] h-[30px]"></div>
            </div>
        </Html>
    )
}

export default KeyPad