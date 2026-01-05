import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useState, useEffect } from "react";
import { Color, MeshStandardMaterial } from "three";
import "./HeroModel.scss";

function getRandomColor() {
  const hue = Math.random();
  const saturation = 0.4 + Math.random() * 0.6;
  const lightness = 0.5 + Math.random() * 0.4;
  const color = new Color();
  color.setHSL(hue, saturation, lightness);
  return color;
}

function Model({ url, isMobile }) {
  const ref = useRef();
  const { scene } = useGLTF(url);
  const [hovered, setHovered] = useState(false);
  const [clickColor, setClickColor] = useState(null);

  // cache meshes and original colors once
  const meshesRef = useRef([]);
  const originalColors = useRef([]);

  useEffect(() => {
    const meshes = [];
    const colors = [];
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        meshes.push(child);
        colors.push(child.material.color.clone());
        if (child.material.emissive) {
          child.userData.baseEmissive = child.material.emissive.clone();
          child.userData.baseMetalness = child.material.metalness ?? 0;
          child.userData.baseRoughness = child.material.roughness ?? 0.5;
        }
      }
    });
    meshesRef.current = meshes;
    originalColors.current = colors;
  }, [scene]);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    // rotation + float
    ref.current.rotation.y += isMobile ? 0.004 : 0.002;
    ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.05;

    const meshes = meshesRef.current;

    for (let i = 0; i < meshes.length; i++) {
      const mesh = meshes[i];
      const mat = mesh.material;

      // click color lerp
      if (clickColor) {
        mat.color.lerp(clickColor, 0.1);
      } else {
        mat.color.lerp(originalColors.current[i], 0.05);
      }
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1}
      onPointerOver={() => !isMobile && setHovered(true)}
      onPointerOut={() => !isMobile && setHovered(false)}
      onClick={() => setClickColor(getRandomColor())}
    />
  );
}

export default function HeroModel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 580);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="HeroModel-container">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }} style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.7} />
        <directionalLight intensity={0.5} position={[5, 5, 5]} />
        <Environment preset="studio" background={false} />
        <Model url="/model3d1.glb" isMobile={isMobile} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={!isMobile} />
        <EffectComposer>
          <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} intensity={0.3} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
