import * as THREE from 'three'
export class Panel{
    constructor(){
        this.initTexture();
        this.panel = new THREE.Mesh(
            new THREE.PlaneGeometry(4,3.5,50,50),
            new THREE.MeshStandardMaterial({
                color: 0xff0000,
                map : this.ColorTexture,
                roughnessMap: this.RoughnessTexture,
                normalMap: this.NormalTexture,
                metalnessMap: this.MetallicTexture,
                aoMap: this.AmbiantOcclusionTexture
            })
           )
           this.panel.material.side = THREE.DoubleSide
    }
    initTexture(){
        const textureLoader = new THREE.TextureLoader();
        this.ColorTexture = textureLoader.load('roof/Metal_Copper_Roof_001a/Metal_Copper_Roof_001a_basecolor.jpg')
        this.RoughnessTexture = textureLoader.load('roof/Metal_Copper_Roof_001a/Metal_Copper_Roof_001a_roughness.jpg')
        this.NormalTexture = textureLoader.load('roof/Metal_Copper_Roof_001a/Metal_Copper_Roof_001a_normal.jpg')
        this.MetallicTexture = textureLoader.load('roof/Metal_Copper_Roof_001a/Metal_Copper_Roof_001a_metallic.jpg')
        this.AmbiantOcclusionTexture = textureLoader.load('roof/Metal_Copper_Roof_001a/Metal_Copper_Roof_001a_ambientOcclusion.jpg')
        this.ColorTexture.colorSpace = THREE.SRGBColorSpace
    }
}