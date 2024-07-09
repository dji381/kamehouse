import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export class Cloud{
    constructor(){
        this.gltfLoader = new GLTFLoader();
        this.model = null;
    }
    
    loadModel(){
        return new Promise((resolve, reject) => {
            this.gltfLoader.load('/models/cloud/scene.gltf',
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