import React from "react";

export default function GlowBlob({ color = "#FF3B00", size = "400px", top, left, bottom, right }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0.12,
        width: size,
        height: size,
        top: top,
        left: left,
        bottom: bottom,
        right: right,
      }}
      aria-hidden="true"
    />
  );
}
