import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const RotatingBox = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // So if I wanted to download a 3D model from online, then use it in this scene how would I do it?

    const cubeMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x1f2226 }), // White side
      new THREE.MeshBasicMaterial({ color: 0x515355 }), // #515355
      new THREE.MeshBasicMaterial({ color: 0x757677 }), // Blue side
      new THREE.MeshBasicMaterial({ color: 0x404349 }), // Yellow side
      new THREE.MeshBasicMaterial({ color: 0x34373c }), // Magenta side
      new THREE.MeshBasicMaterial({ color: 0x292c30 }), // Cyan side
    ];

    // Canvas
    const canvas = canvasRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // Make scene background transparent

    // Group and Objects
    const group = new THREE.Group();
    group.scale.y = 1;
    group.rotation.y = 0.2;
    scene.add(group);

    const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), cubeMaterials);
    group.add(cube1);

    // Sizes
    const sizes = {
      width: 400,
      height: 600,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3.2;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true, // Enable transparency for the canvas
    });
    renderer.setSize(sizes.width, sizes.height);

    // Animation loop
    const tick = () => {
      cube1.rotation.y += 0.01;
      cube1.rotation.x += 0.01;

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []); // Empty dependency array to run the effect only once on mount

  return <canvas ref={canvasRef} className="webgl" />;
};

export default RotatingBox;
