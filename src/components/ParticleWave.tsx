import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Stars = ({ count = 5000 }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const { mouse } = useThree();

  const [positions, sizes, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const col = new Float32Array(count * 3);
    const color1 = new THREE.Color('#10b981'); // Emerald
    const color2 = new THREE.Color('#1d4ed8'); // Blue
    const color3 = new THREE.Color('#ffffff'); // White

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Random positions in a large sphere
      const r = 50 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[idx] = r * Math.sin(phi) * Math.cos(theta);
      pos[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[idx + 2] = r * Math.cos(phi);

      sz[i] = Math.random() * 0.2 + 0.05;

      // Mix colors for a nebula feel
      const mix = Math.random();
      let c;
      if (mix < 0.1) c = color1;
      else if (mix < 0.2) c = color2;
      else c = color3;

      col[idx] = c.r;
      col[idx + 1] = c.g;
      col[idx + 2] = c.b;
    }
    return [pos, sz, col];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.02;
    pointsRef.current.rotation.x = time * 0.01;
    
    // Subtle mouse parallax
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouse.x * 5, 0.05);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouse.y * 5, 0.05);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Nebula = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -20]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial
        transparent
        opacity={0.05}
        color="#064e3b"
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

export const ParticleWave = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {/* Abstract Gradient Background */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-900/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-emerald-950/30 via-slate-950 to-blue-950/30 opacity-60" />
      </div>

      <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
        <Stars />
        <Nebula />
      </Canvas>
    </div>
  );
};
