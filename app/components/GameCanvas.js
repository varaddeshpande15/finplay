'use client';

import React, { useState } from 'react';
import Avatar from './Avatar';
import NPC from './NPC';
import DialogBox from './DialogBox';

export default function GameCanvas() {
  const [dialog, setDialog] = useState(null); // Current dialog scenario

  const handleInteraction = (scenario) => {
    setDialog(scenario);
  };

  return (
    <div className="relative w-full h-screen bg-blue-200 overflow-hidden">
      {/* Background */}
      <div className="absolute w-full h-full bg-[url('/assets/background.png')] bg-cover"></div>

      {/* Avatar */}
      <Avatar />

      {/* NPCs */}
      <NPC
        position={{ x: 300, y: 200 }}
        onInteract={() =>
          handleInteraction({
            question: "You have $10,000. Would you invest in (a) Index funds, (b) Arbitrage funds, or (c) Debt funds?",
            options: ["Index Funds", "Arbitrage Funds", "Debt Funds"],
          })
        }
      />

      {/* Dialog Box */}
      {dialog && (
        <DialogBox
          scenario={dialog}
          onClose={() => setDialog(null)}
          onAnswer={(answer) => console.log('User chose:', answer)}
        />
      )}
    </div>
  );
}
