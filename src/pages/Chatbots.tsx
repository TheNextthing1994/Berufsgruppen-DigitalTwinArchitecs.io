import React from 'react';
import { Solutions } from '../components/Solutions';

interface ChatbotsProps {
  onSolution: (industry: string) => void;
}

export const Chatbots: React.FC<ChatbotsProps> = ({ onSolution }) => {
  return (
    <div className="pt-20">
      <Solutions onSolutionClick={onSolution} />
    </div>
  );
};
