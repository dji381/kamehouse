import { BaseFloor } from "./BaseFloor";
import * as THREE from 'three'
export class Water extends BaseFloor{
    constructor(){
        super();
        this.initTexture();
        this.water = new THREE.Mesh(
            this.geometry,
            new THREE.MeshStandardMaterial({
                map: this.ColorTexture,
                displacementMap: this.DisplacementTexture,
                alphaMap: this.AlphaTexture,
                transparent: true,
                displacementBias: -0.06,
                displacementScale: 0.5,
                roughnessMap: this.RoughnessTexture,
                aoMap: this.AoTexture,
                normalMap: this.NormalTexture
            })
        )
        this.reposition();
    }
    initTexture(){
        const textureLoader = new THREE.TextureLoader();
        this.ColorTexture = textureLoader.load('floor/water/Water_002_COLOR.jpg')
        this.DisplacementTexture = textureLoader.load('floor/water/Water_002_DISP.png')
        this.RoughnessTexture = textureLoader.load('floor/water/Water_002_ROUGH.jpg')
        this.NormalTexture = textureLoader.load('floor/water/Water_002_NORM.jpg')
        this.AoTexture = textureLoader.load('floor/water/Water_002_OCC.jpg')
        this.AlphaTexture = textureLoader.load('floor/sand_01/sand_01_alpha5.jpg')
        this.ColorTexture.colorSpace = THREE.SRGBColorSpace

        this.ColorTexture.repeat.set(8,2)
        this.DisplacementTexture.repeat.set(8,2)
        this.RoughnessTexture.repeat.set(8,2)
        this.NormalTexture.repeat.set(8,2)
        this.AoTexture.repeat.set(8,2)
        this.ColorTexture.repeat.set(8,2)

        this.ColorTexture.wrapS = THREE.RepeatWrapping
        this.DisplacementTexture.wrapS = THREE.RepeatWrapping
        this.RoughnessTexture.wrapS = THREE.RepeatWrapping
        this.NormalTexture.wrapS = THREE.RepeatWrapping
        this.AoTexture.wrapS = THREE.RepeatWrapping
        this.ColorTexture.wrapS = THREE.RepeatWrapping
        
        this.ColorTexture.wrapT = THREE.RepeatWrapping
        this.DisplacementTexture.wrapT = THREE.RepeatWrapping
        this.RoughnessTexture.wrapT = THREE.RepeatWrapping
        this.NormalTexture.wrapT = THREE.RepeatWrapping
        this.AoTexture.wrapT = THREE.RepeatWrapping
        this.ColorTexture.wrapT = THREE.RepeatWrapping
    }
    reposition(){
        this.water.position.y = 0;
        this.water.rotateX(Math.PI* -0.5);
    }
}