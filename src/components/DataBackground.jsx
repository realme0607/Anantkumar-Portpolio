import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Generate random data points
const PARTICLE_COUNT = 40;

const generateParticles = () => {
  const particles = [];
  const cols = 8;
  const rows = 5;
  const shapes = ['circle', 'square', 'triangle'];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    // Stage 1: Random (Chaos)
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;

    // Stage 2: Grid (Structure)
    // Center the grid in percentage terms (10% to 90%)
    const colIndex = i % cols;
    const rowIndex = Math.floor(i / cols);
    const gridX = 15 + (colIndex * (70 / cols));
    const gridY = 20 + (rowIndex * (60 / rows));

    // Stage 3: Chart (Insight)
    // Form a simple bar chart shape. Group into 5 bars.
    const barGroup = i % 5;
    const stackInBar = Math.floor(i / 5);
    // x position for the 5 bars
    const chartX = 20 + (barGroup * 15);
    // y position - stacking upwards from bottom (80%)
    const chartHeight = 80 - (stackInBar * 5);

    particles.push({
      id: i,
      initialX,
      initialY,
      gridX,
      gridY,
      chartX,
      chartHeight,
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    });
  }
  return particles;
};

export const DataBackground = () => {
  const particles = useMemo(() => generateParticles(), []);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll value
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background Gradient Transition
  const bgColor = useTransform(
    smoothScroll,
    [0, 0.5, 0.9],
    ['#0a192f', '#0f2e3a', '#f1f5f9'] // Navy -> Deep Teal -> Soft White
  );

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden">
      {/* Global Background Color Layer */}
      <motion.div
        className="fixed inset-0 w-full h-full"
        style={{ backgroundColor: bgColor }}
      />

      {/* Fixed Container for Particles to prevent them from scrolling away immediately, 
          but their positions react to scroll */}
      <div className="fixed inset-0 w-full h-full">
        {particles.map((p) => (
          <Particle key={p.id} p={p} scroll={smoothScroll} />
        ))}

        {/* Connection Lines (Visible only in Grid/Chart phase) */}
        <Connections scroll={smoothScroll} particles={particles} />
      </div>
    </div>
  );
};

const Particle = ({ p, scroll }) => {
  // Interpolate positions based on scroll phases
  // 0 - 0.3: Chaos -> Chaos (Floating up slightly)
  // 0.3 - 0.6: Chaos -> Grid
  // 0.6 - 0.9: Grid -> Chart

  const x = useTransform(
    scroll,
    [0, 0.3, 0.6, 1],
    [`${p.initialX}%`, `${p.initialX}%`, `${p.gridX}%`, `${p.chartX}%`]
  );

  const y = useTransform(
    scroll,
    [0, 0.3, 0.6, 1],
    [`${p.initialY}%`, `${p.initialY - 20}%`, `${p.gridY}%`, `${p.chartHeight}%`]
  );

  const opacity = useTransform(scroll, [0.9, 1], [0.6, 0.8]);
  const scale = useTransform(scroll, [0, 0.6, 1], [0.8, 1, 1.2]);

  // Color shifting: Cyan -> Purple -> Green/Navy
  const bg = useTransform(
    scroll,
    [0, 0.5, 1],
    ['#22d3ee', '#c084fc', '#0f766e'] // Cyan-400 -> Purple-400 -> Teal-700
  );

  const styleProps = {
    left: x,
    top: y,
    backgroundColor: bg,
    opacity,
    scale,
  };

  const className = "absolute w-3 h-3 shadow-[0_0_10px_rgba(34,211,238,0.5)]";

  if (p.shape === 'square') {
    return (
      <motion.div
        style={styleProps}
        className={`${className} rounded-[2px]`} // Slightly rounded corners for square
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: Math.random() }}
      />
    );
  } else if (p.shape === 'triangle') {
    return (
      <motion.div
        style={{
          ...styleProps,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: Math.random() }}
      />
    );
  }

  // Default circle
  return (
    <motion.div
      style={styleProps}
      className={`${className} rounded-full`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1, delay: Math.random() }}
    />
  );
};

const Connections = ({ scroll, particles }) => {
  // Only show connections in the middle "Network/Grid" phase
  const opacity = useTransform(scroll, [0.2, 0.45, 0.6], [0, 0.3, 0]);

  // Just connect a few neighbors for the "Network" visual effect
  // We'll just SVG draw lines between particle i and i+1 if they are close in the array
  // This mimics "finding patterns"

  return (
    <motion.svg className="absolute inset-0 w-full h-full" style={{ opacity }}>
      {particles.map((p, i) => {
        if (i % 5 === 0 || i >= particles.length - 1) return null;
        const next = particles[i + 1];
        return (
          <ConnectionLine key={i} p1={p} p2={next} scroll={scroll} />
        );
      })}
    </motion.svg>
  );
};

const ConnectionLine = ({ p1, p2, scroll }) => {
  const x1 = useTransform(scroll, [0, 0.3, 0.6], [`${p1.initialX}%`, `${p1.initialX}%`, `${p1.gridX}%`]);
  const y1 = useTransform(scroll, [0, 0.3, 0.6], [`${p1.initialY}%`, `${p1.initialY - 20}%`, `${p1.gridY}%`]);
  const x2 = useTransform(scroll, [0, 0.3, 0.6], [`${p2.initialX}%`, `${p2.initialX}%`, `${p2.gridX}%`]);
  const y2 = useTransform(scroll, [0, 0.3, 0.6], [`${p2.initialY}%`, `${p2.initialY - 20}%`, `${p2.gridY}%`]);

  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="rgba(34, 211, 238, 0.3)"
      strokeWidth="1"
    />
  );
};