import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export class Kamesenin{
    constructor(){
        this.gltfLoader = new GLTFLoader();
    }
    
    loadModel(){
        return new Promise((resolve, reject) => {
            this.gltfLoader.load('/models/kamesenin/scene.gltf',
                (gltf) => {
                    this.scene = gltf.scene;
                    resolve(this.scene);
                },
                undefined,
                (error) => {
                    reject(error);
                }
            );
        });
    }
}