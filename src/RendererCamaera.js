import * as THREE from "three";
import { scene } from "./scene/index";
// 1.视锥体角度2.相机视锥体宽高比3.近4.远
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  1,
  3000
);
camera.position.set(-621, 357, 357); //相机坐标
camera.lookAt(0, 0, 0); //注视目标位置

const renderer = new THREE.WebGLRenderer({
  antialias: true, //开启抗锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //设置渲染器像素比
renderer.setSize(window.innerWidth, window.innerHeight); //设置canvas画布尺寸
renderer.outputColorSpace = THREE.SRGBColorSpace; //设置渲染器输出编码
renderer.setClearColor(0x005577); //1.颜色2.透明度
document.body.appendChild(renderer.domElement); //将渲染好的canvas画布渲染到html上
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; //轨道控制器
// 创建一个相机控件对象 轨道控制器
// 1.改变那个相机
// 2.监控那个范围
const controls = new OrbitControls(camera, renderer.domElement); //实例化轨道控制器
const render = () => {
  renderer.render(scene, camera); //执行渲染canvas画布操作
  requestAnimationFrame(render); //请求再次渲染render函数,默认每秒60帧
};
render();
window.onresize = () => {
  //当窗口大小被调整时调用
  renderer.setSize(window.innerWidth, window.innerHeight); //重新渲染canvas画布尺寸
  camera.aspect = window.innerWidth / window.innerHeight; //设置宽高比
  // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
  // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  camera.updateProjectionMatrix();
};

export { renderer, camera };
