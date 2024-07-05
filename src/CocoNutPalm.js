import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export class CocoNutPalm{
    constructor(){
        this.gltfLoader = new GLTFLoader();
    }
     loadModel(){
        return new Promise((resolve, reject) => {
            this.gltfLoader.load('/models/coconut/scene.gltf',
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