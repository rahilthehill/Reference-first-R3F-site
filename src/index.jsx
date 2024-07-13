import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import * as THREE from 'three'
import Background from 'three/examples/jsm/renderers/common/Background.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
            
    fov:45,
    near:0.1,
    far:200,
    position:[3,2,6]


    }

root.render(   
        <Canvas 

    
        gl = {{

            toneMapping:THREE.ACESFilmicToneMapping,
            antialias:true,
            outputColorSpace: THREE.sRGBColorSpace
            


        }}

        camera={cameraSettings}
        >
           <Experience />
        </Canvas>   
)