import * as THREE from "three";
import modele from "./model.js";
import { camera } from "./main.js";

let chooseMesh = null;
function choose(e) {
  if (chooseMesh) {
    chooseMesh.material.color.set(0xffffff);
  }
  const px = e.offsetX;
  const py = e.offsetY;
  const x = (px / window.innerWidth) * 2 - 1;
  const y = -(py / window.innerHeight) * 2 + 1;
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
  const cunchu = modele.children[0].children[2].children;
  const intersects = raycaster.intersectObjects(cunchu);
  if (intersects.length > 0) {
    chooseMesh = intersects[0].object;
    chooseMesh.material.color.set(0x00ffff);
    chooseMesh.point = intersects[0].point;
  } else chooseMesh = null;
}
// addEventListener("click", choose);
export { choose, chooseMesh };
