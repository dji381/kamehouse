import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { Sky } from 'three/addons/objects/Sky.js'
import { Sand } from './Sand'
import { Water } from './Water'
import { Grass } from './Grass'
import { Kamehouse } from './Kamehouse'
import { CocoNutPalm } from './CocoNutPalm'
import { Palm } from './Palm'
import { Kamesenin } from './KameSenin'
import { Cloud } from './Cloud'
/**
 * Base
 */
// Debug
const gui = new GUI()
// gui.hide();

// Canvas
const canvas = document.querySelector('canvas.webgl')
// Scene
const scene = new THREE.Scene()
//helper
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );


/**
 * House
 */

//Kamehouse
const kamehouse = new Kamehouse();
kamehouse.loadModel().then((kamehouseScene)=>{
    kamehouseScene.children[0].children[0].children[0].children[0].children.forEach(element => {
        element.castShadow = true;
        element.receiveShadow = true
    });
    kamehouseScene.scale.setScalar(0.0125);
    scene.add(kamehouseScene)
})

//Coconut palm
const coconutPalm = new CocoNutPalm();
coconutPalm.loadModel().then((coconutPalm)=>{
    coconutPalm.position.x = -6
    scene.add(coconutPalm);
})

//Palm
const palm = new Palm();
palm.loadModel().then((palm)=>{
    palm.scale.setScalar(0.8);
    palm.position.x = 6;
    palm.children[0].children[0].children[0].children[0].children.forEach(element => {
        element.castShadow = true;
    });
    scene.add(palm);
})

//Kamesenin
const kamesenin = new Kamesenin();
kamesenin.loadModel().then((kamesenin)=>{
    kamesenin.scale.setScalar(0.125);
    kamesenin.position.z = 5;
    kamesenin.position.y = 1
    scene.add(kamesenin);
})
//Magic Cloud
const magicLight = new THREE.PointLight(0xff0000,15)
const magicClouds = new Cloud();
magicClouds.loadModel().then((magicCloud)=>{
    magicCloud.scale.setScalar(0.5);
    magicCloud.position.x = -3
    magicCloud.position.y = 8
    magicCloud.add(magicLight)
    magicCloud.traverse((node)=>{
        if(node.isMesh){
            node.material.emissive.r = 200
        }
    })
    magicLight.position.set(7,0,0)
    magicClouds.model = magicCloud
    scene.add(magicCloud);
})
//Water
const {water} = new Water();
scene.add(water);

//Sand
const {sand} = new Sand();
scene.add(sand)
sand.scale.setScalar(0.9);

//Grass
const {grass} = new Grass();
scene.add(grass);
grass.scale.setScalar(0.5);

//Sky
/**
 * Sky 
 * */
const sky = new Sky()
sky.scale.set(100, 100, 100)
scene.add(sky)
sky.material.uniforms['turbidity'].value = 5
sky.material.uniforms['rayleigh'].value = 2
sky.material.uniforms['mieCoefficient'].value = 0.005
sky.material.uniforms['mieDirectionalG'].value = 0.7
sky.material.uniforms['sunPosition'].value.set(0.3, 0.1, -0.95)
/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 1)
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight('#ffffff', 2.5)
directionalLight.position.set(3, 4, 0)
scene.add(directionalLight)
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 10
camera.position.y = 5
camera.position.z = 7
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Shadows
 */
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

//cast and receive
directionalLight.castShadow = true;
sand.receiveShadow = true;
grass.receiveShadow = true;
/**
 * Animate
 */
const clock = new THREE.Clock();
function render(time) {
    const elapsedTime = clock.getElapsedTime();
    controls.update();
    renderer.render(scene, camera);
    if(magicClouds.model){
        magicClouds.model.position.x = (Math.sin(elapsedTime)) *3 - 3
        magicClouds.model.position.y += Math.sin(time*0.01) * 0.08
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);