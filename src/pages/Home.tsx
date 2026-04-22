import React from 'react';
import { Hero } from '../components/Hero';
import { PotentialQuiz } from '../components/PotentialQuiz';
import { ScrollingTiles } from '../components/ScrollingTiles';
import { ROISection } from '../components/ROISection';
import { DigitalTwin } from '../components/DigitalTwin';

interface HomeProps {
  onPrefill: (summary: string) => void;
  onSolution: (industry: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onPrefill, onSolution }) => {
  return (
    <>
      <Hero onTileClick={onPrefill} />
      <PotentialQuiz />
      <DigitalTwin />
      <ROISection />
      <ScrollingTiles onTileClick={onSolution} />
    </>
  );
};
