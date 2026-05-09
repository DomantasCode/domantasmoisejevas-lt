'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import { useMemo, useRef, useState, Suspense } from 'react'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import { countries, type Country } from '@/data/countries'

const RADIUS = 2

function latLngToVec3(lat: number, lng: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  )
}

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null!)
  const cloudsRef = useRef<THREE.Mesh>(null!)

  const [colorMap, normalMap, specMap, cloudMap] = useLoader(TextureLoader, [
    '/textures/earth/earth_atmos_2048.jpg',
    '/textures/earth/earth_normal_2048.jpg',
    '/textures/earth/earth_specular_2048.jpg',
    '/textures/earth/earth_clouds_2048.png',
  ])

  useFrame((_, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.05
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.07
  })

  return (
    <>
      <mesh ref={earthRef}>
        <sphereGeometry args={[RADIUS, 96, 96]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specMap}
          shininess={12}
          specular={new THREE.Color('#1e3a8a')}
        />
      </mesh>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[RADIUS * 1.012, 64, 64]} />
        <meshLambertMaterial
          map={cloudMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>
    </>
  )
}

function AtmosphereGlow() {
  // Fresnel back-side glow for atmospheric rim lighting
  return (
    <mesh scale={1.2}>
      <sphereGeometry args={[RADIUS, 48, 48]} />
      <shaderMaterial
        transparent
        side={THREE.BackSide}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          glowColor: { value: new THREE.Color('#5b9dff') },
        }}
        vertexShader={`
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 glowColor;
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
            gl_FragColor = vec4(glowColor, intensity * 0.9);
          }
        `}
      />
    </mesh>
  )
}

function Pin({
  country,
  onClick,
  onHover,
}: {
  country: Country
  onClick: () => void
  onHover: (label: string | null) => void
}) {
  const [hovered, setHovered] = useState(false)
  const position = useMemo(
    () => latLngToVec3(country.lat, country.lng, RADIUS * 1.005),
    [country.lat, country.lng]
  )
  const baseColor = country.current ? '#fb923c' : '#fcd34d'
  const hoverColor = '#ffffff'
  const meshRef = useRef<THREE.Mesh>(null!)
  const ringRef = useRef<THREE.Mesh>(null!)

  // Pulse ring for current country
  useFrame((state) => {
    if (country.current && ringRef.current) {
      const t = state.clock.elapsedTime
      const s = 1 + 0.4 * Math.sin(t * 2)
      ringRef.current.scale.setScalar(s)
      ;(ringRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.5 - 0.3 * Math.sin(t * 2)
    }
  })

  // Orient pin so its "up" points away from globe center
  const quaternion = useMemo(() => {
    const up = new THREE.Vector3(0, 1, 0)
    const dir = position.clone().normalize()
    return new THREE.Quaternion().setFromUnitVectors(up, dir)
  }, [position])

  return (
    <group position={position} quaternion={quaternion}>
      {/* Solid pin head */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          onHover(country.nameLt)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          onHover(null)
          document.body.style.cursor = 'auto'
        }}
        onClick={(e) => {
          e.stopPropagation()
          onClick()
        }}
      >
        <sphereGeometry args={[hovered ? 0.06 : 0.04, 16, 16]} />
        <meshBasicMaterial
          color={hovered ? hoverColor : baseColor}
          toneMapped={false}
        />
      </mesh>

      {/* Outer halo */}
      <mesh>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial
          color={baseColor}
          transparent
          opacity={0.35}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Pulse ring for current */}
      {country.current && (
        <mesh ref={ringRef}>
          <ringGeometry args={[0.12, 0.16, 32]} />
          <meshBasicMaterial
            color={baseColor}
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>
      )}
    </group>
  )
}

function Pins({ onHover }: { onHover: (label: string | null) => void }) {
  const router = useRouter()
  const groupRef = useRef<THREE.Group>(null!)

  // Co-rotate pins with the Earth
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.05
  })

  const visited = useMemo(() => countries.filter((c) => c.visited), [])

  return (
    <group ref={groupRef}>
      {visited.map((c) => (
        <Pin
          key={c.code}
          country={c}
          onClick={() => router.push(`/travels/${c.code.toLowerCase()}`)}
          onHover={onHover}
        />
      ))}
    </group>
  )
}

export function EarthGlobe() {
  const [label, setLabel] = useState<string | null>(null)

  return (
    <div className="relative aspect-square w-full max-w-[640px]">
      <Canvas
        camera={{ position: [0, 0.4, 5.6], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.18} />
        <directionalLight position={[5, 3, 5]} intensity={1.4} color="#fff5e1" />
        <pointLight position={[-6, -2, -4]} intensity={0.5} color="#5b9dff" />

        <Suspense fallback={null}>
          <AtmosphereGlow />
          <group rotation={[0.32, 0, 0]}>
            <Earth />
            <Pins onHover={setLabel} />
          </group>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          enableDamping
          dampingFactor={0.08}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.8}
        />
      </Canvas>

      {/* Hover label */}
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-warm-orange/40 bg-background/90 px-4 py-1.5 font-mono text-xs text-warm-orange backdrop-blur-md transition-all"
        style={{
          opacity: label ? 1 : 0,
          transform: `translate(-50%, ${label ? 0 : 8}px)`,
        }}
      >
        {label ?? ''}
      </div>
    </div>
  )
}
