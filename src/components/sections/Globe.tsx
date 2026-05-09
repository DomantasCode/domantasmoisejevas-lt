'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
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
  const baseColor = country.current ? '#fb923c' : '#60a5fa'
  const hoverColor = '#facc15'

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[hovered ? 0.16 : 0.1, 16, 16]} />
        <meshBasicMaterial
          color={hovered ? hoverColor : baseColor}
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </mesh>
      <mesh
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
        <sphereGeometry args={[hovered ? 0.07 : 0.05, 16, 16]} />
        <meshBasicMaterial color={hovered ? hoverColor : baseColor} />
      </mesh>
    </group>
  )
}

function Atmosphere() {
  return (
    <mesh scale={1.18}>
      <sphereGeometry args={[RADIUS, 48, 48]} />
      <meshBasicMaterial
        color="#3b82f6"
        transparent
        opacity={0.06}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  )
}

function GlobeBody({
  onHover,
}: {
  onHover: (label: string | null) => void
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const router = useRouter()

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06
    }
  })

  const visited = useMemo(() => countries.filter((c) => c.visited), [])

  return (
    <group ref={groupRef} rotation={[0.4, 0, 0]}>
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial color="#0a0a0a" roughness={1} metalness={0} />
      </mesh>

      <mesh>
        <sphereGeometry args={[RADIUS * 1.001, 48, 24]} />
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[RADIUS * 1.002, 0.003, 8, 96]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} />
      </mesh>

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

export function Globe() {
  const [label, setLabel] = useState<string | null>(null)

  return (
    <div className="relative aspect-square w-full max-w-[540px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 4, 5]} intensity={0.9} />
        <Atmosphere />
        <GlobeBody onHover={setLabel} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>

      <div
        className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-foreground/10 bg-background/80 px-3 py-1 font-mono text-xs backdrop-blur transition-opacity"
        style={{ opacity: label ? 1 : 0 }}
      >
        {label ?? ''}
      </div>

      <p className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        Tempk · spausk pin
      </p>
    </div>
  )
}
