'use client';

import React, { useEffect, useState } from 'react';

export default function Avatar() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleKeyDown = (e) => {
    const { x, y } = position;
    if (e.key === 'ArrowUp') setPosition({ x, y: y - 10 });
    if (e.key === 'ArrowDown') setPosition({ x, y: y + 10 });
    if (e.key === 'ArrowLeft') setPosition({ x: x - 10, y });
    if (e.key === 'ArrowRight') setPosition({ x: x + 10, y });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [position]);

  return (
    <div
      className="absolute w-10 h-10 bg-yellow-400 rounded-full"
      style={{ top: position.y, left: position.x }}
    ></div>
  );
}
