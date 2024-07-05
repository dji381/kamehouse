import * as THREE from 'three'
export class BaseFloor{
    constructor(){
        this.geometry = new THREE.PlaneGeometry(40,40,100,100)
    }
}