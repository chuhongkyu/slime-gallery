const KeyPad = () => {
    return(
        <div className="absolute bottom-1 right-1 w-[110px] flex items-center flex-col text-white text-center">
            {/* front */}
            <div className="border-2 border-white w-[30px] h-[30px]">w</div>
            <div className="flex gap-[10px]">
                {/* left */}
                <div className="border-2 border-white w-[30px] h-[30px]">a</div>
                {/* down */}
                <div className="border-2 border-white w-[30px] h-[30px]">s</div>
                {/* right */}
                <div className="border-2 border-white w-[30px] h-[30px]">d</div>
            </div>
            {/* jump */}
            <div className="border-2 border-white w-[110px] h-[30px]">spacd</div>
        </div>
    )
}

export default KeyPad