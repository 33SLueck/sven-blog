import React from 'react'

type HeroSectionProps = {
  title?: string;
  subtitle?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="mb-8 p-8 rounded">
      {title ? <h1 className="text-4xl font-bold mb-2">{title}</h1> : null}
      {subtitle ? <p className="text-lg mb-2">{subtitle}</p> : null}
    </section>
  );
};

export default HeroSection;