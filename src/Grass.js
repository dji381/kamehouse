import { BaseFloor } from "./BaseFloor";
import * as THREE from 'three'
export class Grass extends BaseFloor{
    constructor(){
        super();
        this.initTexture();
        this.grass = new THREE.Mesh(
            this.geometry,
            new THREE.MeshStandardMaterial({
                map: this.ColorTexture,
                roughnessMap: this.RoughnessTexture,
                aoMap: this.AoTexture,
                normalMap: this.NormalTexture,
                alphaMap: this.AlphaTexture,
                transparent: true
            })
        )
        this.reposition();
    }
    initTexture(){
        const textureLoader = new THREE.TextureLoader();
        this.ColorTexture = textureLoader.load('floor/grass/Grass_003_COLOR.jpg')
        this.RoughnessTexture = textureLoader.load('floor/grass/Grass_003_ROUGH.jpg')
        this.NormalTexture = textureLoader.load('floor/grass/Grass_003_NRM.jpg')
        this.AoTexture = textureLoader.load('floor/grass/Grass_003_OCC.jpg')
        this.AlphaTexture = textureLoader.load('floor/sand_01/sand_01_alpha5.jpg')
        this.ColorTexture.colorSpace = THREE.SRGBColorSpace

        this.ColorTexture.repeat.set(8,8)
        this.RoughnessTexture.repeat.set(8,8)
        this.NormalTexture.repeat.set(8,8)
        this.AoTexture.repeat.set(8,8)
        this.ColorTexture.repeat.set(8,8)

        this.ColorTexture.wrapS = THREE.RepeatWrapping
        this.RoughnessTexture.wrapS = THREE.RepeatWrapping
        this.NormalTexture.wrapS = THREE.RepeatWrapping
        this.AoTexture.wrapS = THREE.RepeatWrapping
        this.ColorTexture.wrapS = THREE.RepeatWrapping
        
        this.ColorTexture.wrapT = THREE.RepeatWrapping
        this.RoughnessTexture.wrapT = THREE.RepeatWrapping
        this.NormalTexture.wrapT = THREE.RepeatWrapping
        this.AoTexture.wrapT = THREE.RepeatWrapping
        this.ColorTexture.wrapT = THREE.RepeatWrapping
    }
    reposition(){
        this.grass.position.y = 0.5;
        this.grass.rotateX(Math.PI* -0.5);
    }
}