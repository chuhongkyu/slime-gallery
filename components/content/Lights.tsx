const Lights = () => {
    return(
        <>
            <ambientLight intensity={1} />
            <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}>
                <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
            </directionalLight>
        </>
    )
}

export default Lights;