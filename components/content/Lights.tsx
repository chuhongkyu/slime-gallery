const Lights = () => {
    return(
        <>
            <ambientLight intensity={1} />
        
            <directionalLight
                position={[5, 5, 12]}
                intensity={0.8}
                color={"#f2f5c0"}
                castShadow
            />
        </>
    )
}

export default Lights;