
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, useTexture, Environment } from '@react-three/drei';
import { MathUtils } from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

// Floating book component
const Book = () => {
  const meshRef = useRef(null);
  const texture = useTexture('/placeholder.svg');
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.003;
    meshRef.current.position.y = MathUtils.lerp(
      meshRef.current.position.y,
      Math.sin(state.clock.elapsedTime / 2) * 0.2,
      0.05
    );
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
        <boxGeometry args={[1, 1.4, 0.2]} />
        <meshStandardMaterial map={texture} color="#8B5CF6" metalness={0.5} roughness={0.4} />
      </mesh>
    </Float>
  );
};

// Orbiting spheres representing GMAT topics
const OrbitingSpheres = () => {
  const group = useRef(null);
  const sphereRefs = useRef([]);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.1;
    
    sphereRefs.current.forEach((sphere, i) => {
      if (!sphere) return;
      const offset = i * (Math.PI * 2) / 4;
      sphere.position.x = Math.sin(clock.getElapsedTime() * 0.3 + offset) * 2.5;
      sphere.position.z = Math.cos(clock.getElapsedTime() * 0.3 + offset) * 2.5;
      sphere.position.y = Math.sin(clock.getElapsedTime() * 0.5 + offset) * 0.5;
    });
  });

  const colors = ['#0057FF', '#8B5CF6', '#10B981', '#F97316'];
  
  return (
    <group ref={group}>
      {colors.map((color, i) => (
        <mesh 
          key={i} 
          ref={(el) => (sphereRefs.current[i] = el)} 
          position={[Math.sin(i) * 2.5, 0, Math.cos(i) * 2.5]}
          scale={0.3}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
};

const Scene3D = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <Book />
          <OrbitingSpheres />
          
          <Stars radius={50} depth={50} count={isMobile ? 1000 : 5000} factor={4} fade speed={1} />
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
