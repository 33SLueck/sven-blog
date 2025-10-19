import {urlFor} from '@/sanity/lib/image'
import Image from 'next/image'
import type {FeatureList, Feature} from '@/types/sanity'

export default function FeatureList({block}: {block: FeatureList}) {
  const {title, features} = block
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features?.map((feature: Feature, index: number) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              {feature.icon && (
                <Image
                  src={urlFor(feature.icon).width(64).url()}
                  alt={feature.title || 'Feature icon'}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}