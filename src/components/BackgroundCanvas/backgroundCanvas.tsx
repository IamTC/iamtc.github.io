import * as THREE from "three";
import { createPortal, useEffect, useRef } from "preact/compat";
import Styles from "./styles.module.scss";

const DomElement = () => {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    renderer.render(scene, camera);
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return <div ref={refContainer} className={Styles.BackgroundCanvas}></div>;
};

export const BackgroundCanvas = () => {
  return <>{createPortal(<DomElement></DomElement>, document.body)}</>;
};
