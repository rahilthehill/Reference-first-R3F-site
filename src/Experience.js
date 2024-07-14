import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"   
import CustomObject from "./CustomObject.js"

extend({OrbitControls})

export default function Experience() 
{
    const {camera, gl} = useThree()
    const cubeRef = useRef()
    const groupRef = useRef()
    

    useFrame((state, delta) => { //this will be called each frame "ticks"

        // groupRef.current.rotation.y += delta
        cubeRef.current.rotation.y += delta
        // console.log(cubeRef.current.rotation)

        // const angle = state.clock.getElapsedTime()
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0,0,0)

    })

    return <>

        <orbitControls args = {[camera, gl.domElement]} />

        <ambientLight intensity={1.0} />
       

        <directionalLight position={[1,2,3]} intensity={4.0} />
        
        <group ref={groupRef}>
            <mesh position-x= {-2} >
                <sphereGeometry />
                <meshStandardMaterial color={"orange"} />   
            </mesh>            
            
            <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                <boxGeometry/>
                <meshBasicMaterial color='mediumpurple' />
            </mesh>
        </group>
            <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry/>
                <meshStandardMaterial color='greenYellow' />  
            </mesh>

        <CustomObject />

         </>
}