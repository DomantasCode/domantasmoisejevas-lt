'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Multi-color gradient mesh shader.
// Combines simplex-style noise with mouse-warped UVs and time, then blends 4
// brand colors. Inspired by the morphing gradient meshes used by Mango Media,
// shadergradient.co, etc.
const FRAG = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uRes;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform vec3 uColor4;
  uniform vec3 uBg;

  // Cheap pseudo-noise (smooth, animated)
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)),
             dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash(i + vec2(0,0)), f - vec2(0,0)),
          dot(hash(i + vec2(1,0)), f - vec2(1,0)), u.x),
      mix(dot(hash(i + vec2(0,1)), f - vec2(0,1)),
          dot(hash(i + vec2(1,1)), f - vec2(1,1)), u.x),
      u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uRes.x / uRes.y;
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

    // Mouse warp
    vec2 m = (uMouse - 0.5) * vec2(aspect, 1.0);
    float md = distance(p, m);
    float warp = exp(-md * 2.0) * 0.18;
    p += (m - p) * warp;

    float t = uTime * 0.08;

    // Four orbiting blob centers
    vec2 c1 = vec2(cos(t * 1.1) * 0.55, sin(t * 0.9) * 0.4);
    vec2 c2 = vec2(cos(t * 0.7 + 2.1) * 0.5, sin(t * 1.3 + 0.5) * 0.55);
    vec2 c3 = vec2(cos(t * 0.5 + 4.2) * 0.6, sin(t * 0.8 + 3.0) * 0.45);
    vec2 c4 = vec2(cos(t * 1.4 + 1.0) * 0.45, sin(t * 1.1 + 5.5) * 0.5);

    float n = fbm(p * 1.3 + t * 1.5);
    p += vec2(n, n) * 0.25;

    float w1 = exp(-distance(p, c1) * 2.6);
    float w2 = exp(-distance(p, c2) * 2.6);
    float w3 = exp(-distance(p, c3) * 2.6);
    float w4 = exp(-distance(p, c4) * 2.6);

    float total = w1 + w2 + w3 + w4 + 0.2;
    vec3 color = (w1 * uColor1 + w2 * uColor2 + w3 * uColor3 + w4 * uColor4) / total;

    // Blend with background based on overall blob density (vignette-like)
    float density = clamp(total - 0.2, 0.0, 1.0);
    color = mix(uBg, color, smoothstep(0.0, 0.9, density));

    // Subtle film grain
    float grain = (fract(sin(dot(uv * uTime, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.04;
    color += grain;

    gl_FragColor = vec4(color, 1.0);
  }
`

function Mesh() {
  const ref = useRef<THREE.Mesh>(null!)
  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uRes: { value: new THREE.Vector2(1, 1) },
    uColor1: { value: new THREE.Color('#7b4dff') }, // electric purple
    uColor2: { value: new THREE.Color('#4fc683') }, // mint
    uColor3: { value: new THREE.Color('#ff8040') }, // tangerine
    uColor4: { value: new THREE.Color('#fdbd03') }, // canary yellow
    uBg: { value: new THREE.Color('#040224') }, // deep navy base
  }).current

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime
    const { width, height } = state.size
    uniforms.uRes.value.set(width, height)
  })

  useEffect(() => {
    function onMove(e: MouseEvent) {
      uniforms.uMouse.value.set(
        e.clientX / window.innerWidth,
        1 - e.clientY / window.innerHeight
      )
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [uniforms])

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={VERT}
        fragmentShader={FRAG}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export function MeshGradient({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      aria-hidden
    >
      <Canvas
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        orthographic
        camera={{ zoom: 1, position: [0, 0, 1] }}
      >
        <Mesh />
      </Canvas>
    </div>
  )
}
