import * as THREE from "three";
import { Panel } from "./Panel";
export class Kamehouse {
  constructor() {
    //House container
    this.kameHouse = new THREE.Group();
    //Texture loading
    this.initTexture();
    //Walls
    this.walls = new THREE.Mesh(
      new THREE.BoxGeometry(4, 2, 4),
      new THREE.MeshStandardMaterial({
        color: 0xc5b5bb,
        map: this.ColorTexture,
        roughnessMap: this.ARMTexture,
        normalMap: this.NormalTexture,
      })
    );
    //Roof panels
    this.leftpanel = new Panel();
    this.rightPanel = new Panel();
    this.frontPanel = this.createGeometry();
    //Repositioning
    this.reposition();
  }
  reposition() {
    this.kameHouse.add(
      this.walls,
      this.leftpanel.panel,
      this.rightPanel.panel,
      this.frontPanel
    );
    this.kameHouse.position.y = this.walls.geometry.parameters.height / 2;
    this.leftpanel.panel.position.set(0, 1.8, 1.255);
    this.leftpanel.panel.rotateX(-0.8);
    this.rightPanel.panel.position.set(0, 1.8, -1.255);
    this.rightPanel.panel.rotateX(0.8);
    this.frontPanel.position.set(-2,1,-2);
  }
  initTexture() {
    const textureLoader = new THREE.TextureLoader();
    this.ColorTexture = textureLoader.load("wall/white_wood/diff.png");
    this.ARMTexture = textureLoader.load("wall/white_wood/roughness.png");
    this.NormalTexture = textureLoader.load("wall/white_wood/normal.png");
    this.DisplacementTexture = textureLoader.load(
      "wall/white_wood/displacement.png"
    );
    this.ColorTexture.colorSpace = THREE.SRGBColorSpace;
    this.ColorTexture.repeat.setX(5)
    this.ColorTexture.wrapS = THREE.RepeatWrapping
    this.ColorTexture.wrapT = THREE.RepeatWrapping
  }
  createGeometry() {
    //new geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0, 0, -0.05, 0, 0, 4.05, 4, 0, 4.05, 4, 0, -0.05, 4, 2, 2, 0, 2, 2,
    ]);

    const indices = [0, 1, 2, 2, 3, 0, 2, 4, 3, 0, 5, 1];
    const uvs = new Float32Array([
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0
        ]);
    geometry.setIndex(indices);
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs,2))
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const material = new THREE.MeshStandardMaterial({
        color: 0xc5b5bb,
        map: this.ColorTexture,
        roughnessMap: this.ARMTexture,
        normalMap: this.NormalTexture,
    })
    material.side = THREE.DoubleSide;
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }
}
