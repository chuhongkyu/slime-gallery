const Lights = () => {
    return(
        <>
            <ambientLight intensity={1} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={0.8}
                color={"#9e69da"}
            />
        </>
    )
}

export default Lights;