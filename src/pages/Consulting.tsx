import React from 'react';
import { Methodology } from '../components/Methodology';
import { CaseStudies } from '../components/CaseStudies';
import { Testimonials } from '../components/Testimonials';

export const Consulting: React.FC = () => {
  return (
    <div className="pt-20">
      <Methodology />
      <CaseStudies />
      <Testimonials />
    </div>
  );
};
