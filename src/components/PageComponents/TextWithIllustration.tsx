import {urlFor} from '@/sanity/lib/image'
import Image from 'next/image'

import type {TextWithIllustration} from '@/types/sanity'

export default function TextWithIllustration({block}: {block: TextWithIllustration}) {
  const {title, tagline, text, image, imagePosition} = block

  const imageEl = image ? (
    <div className="w-full md:w-1/2">
      <Image
        src={urlFor(image).width(800).url()}
        alt={title || 'Illustration'}
        width={800}
        height={600}
        className="rounded-lg"
      />
    </div>
  ) : null

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-wrap items-center ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            {tagline && <p className="text-lg text-gray-600 mb-4">{tagline}</p>}
            <p>{text}</p>
          </div>
          {imageEl}
        </div>
      </div>
    </section>
  )
}
