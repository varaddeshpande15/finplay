import React from 'react';

export default function NPC({ position, onInteract }) {
  return (
    <div
      className="absolute w-10 h-10 bg-red-500 rounded-full cursor-pointer"
      style={{ top: position.y, left: position.x }}
      onClick={onInteract}
    >
      💬
    </div>
  );
}
