import React from 'react';
import { DigitalTwin } from '../components/DigitalTwin';
import { ROISection } from '../components/ROISection';

export const Automation: React.FC = () => {
  return (
    <div className="pt-20">
      <DigitalTwin />
      <ROISection />
    </div>
  );
};
