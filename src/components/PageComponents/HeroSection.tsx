import React from 'react';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  image?: SanityImageSource;
  CTAText?: string;
  CTALink?: string;
  buttonText?: string;
  buttonLink?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  image,
  CTAText,
  CTALink,
  buttonText,
  buttonLink,
}) => {
  const backgroundStyle = image
    ? { backgroundImage: `url(${urlFor(image).url()})` }
    : {};

  return (
    <section
      className="flex items-center justify-center bg-cover bg-center bg-no-repeat mb-8 p-8 rounded min-h-screen text-white"
      style={backgroundStyle}
    >
      <div className="flex flex-col justify-center items-center mx-auto bg-black/30 bg-opacity-50 p-8 rounded-lg">
        {title ? <h1 className="text-4xl font-bold mb-2">{title}</h1> : null}
        {subtitle ? <p className="text-lg mb-2">{subtitle}</p> : null}
        <div className="flex space-x-4 mt-4">
          {CTAText && CTALink ? (
            <Link
              href={CTALink}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {CTAText}
            </Link>
          ) : null}
          {buttonText && buttonLink ? (
            <Link
              href={buttonLink}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              {buttonText}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;