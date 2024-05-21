"use client"

import useMousePosition from "../hooks/useMousePosition";

const DotRing = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="fixed top-0 left-0 z-50 w-6 h-6 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-full pointer-events-none"
      ></div>
      <div
        className="fixed z-50 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full pointer-events-none top-1/2 left-1/2"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
