import * as THREE from "three";
import model from "./model";

const scene = new THREE.Scene();
scene.add(model); //场景添加网格模型

// 光源设置

// 平行光1
const direnctionLight = new THREE.DirectionalLight(0xffffff, 0.8);
direnctionLight.position.set(400, 200, 300);
scene.add(direnctionLight);

// 平行光2
const direnctionLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
direnctionLight2.position.set(-400, -200, -300);
scene.add(direnctionLight2);
// 环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambient);

const axesHelper = new THREE.AxesHelper(250); //辅助三维坐标
scene.add(axesHelper);

export { scene };
