
import React from 'react';
import { motion } from 'framer-motion';

const BeatIndicator = ({ isPlaying, currentBeat }) => {
  const beats = [1, 2, 3, 4];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center items-center gap-4 md:gap-6 py-4 w-full"
    >
      {beats.map((beat) => {
        const isActive = isPlaying && currentBeat === beat;
        
        return (
          <div
            key={beat}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-200 ${
              isActive ? 'beat-indicator-active' : 'beat-indicator-inactive'
            }`}
          />
        );
      })}
    </motion.div>
  );
};

export default BeatIndicator;
