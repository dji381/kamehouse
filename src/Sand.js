import { BaseFloor } from "./BaseFloor";
import * as THREE from 'three'
export class Sand extends BaseFloor{
    constructor(){
        super();
        this.initTexture();
        this.sand = new THREE.Mesh(
            this.geometry,
            new THREE.MeshStandardMaterial({
                map:this.ColorTexture,
                roughnessMap: this.ARMTexture,
                metalnessMap: this.ARMTexture,
                aoMap: this.ARMTexture,
                normalMap: this.NormalTexture,
                alphaMap: this.AlphaTexture,
                transparent: true,
            })
        )
        this.reposition();
    }
     initTexture(){
        const textureLoader = new THREE.TextureLoader();
        this.AlphaTexture = textureLoader.load('floor/sand_01/sand_01_alpha5.jpg')
        this.ColorTexture = textureLoader.load('floor/sand_01/sand_01_diff_1k.jpg')
        this.DisplacementTexture = textureLoader.load('floor/sand_01/sand_01_disp_1k.jpg')
        this.ARMTexture = textureLoader.load('floor/sand_01/sand_01_arm_1k.jpg')
        this.NormalTexture = textureLoader.load('floor/sand_01/sand_01_nor_gl_1k.jpg')
        this.ColorTexture.colorSpace = THREE.SRGBColorSpace

        this.ColorTexture.repeat.set(8,8)
        this.NormalTexture.repeat.set(8,8)
        this.ARMTexture.repeat.set(8,8)
        this.ColorTexture.repeat.set(8,8)

        this.ColorTexture.wrapS = THREE.RepeatWrapping
        this.NormalTexture.wrapS = THREE.RepeatWrapping
        this.ARMTexture.wrapS = THREE.RepeatWrapping
        this.ColorTexture.wrapS = THREE.RepeatWrapping
        
        this.ColorTexture.wrapT = THREE.RepeatWrapping
        this.NormalTexture.wrapT = THREE.RepeatWrapping
        this.ARMTexture.wrapT = THREE.RepeatWrapping
        this.ColorTexture.wrapT = THREE.RepeatWrapping
    }
    reposition(){
        this.sand.position.y = 0.4;
        this.sand.rotateX(Math.PI* -0.5);
    }
}