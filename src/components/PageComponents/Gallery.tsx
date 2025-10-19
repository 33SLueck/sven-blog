import {urlFor} from '@/sanity/lib/image'
import Image from 'next/image'
import type {Gallery} from '@/types/sanity'
import type {Image as SanityImage} from 'sanity'

export default function Gallery({block}: {block: Gallery}) {
  const {title, images} = block
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images?.map((image: SanityImage, index: number) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={urlFor(image).width(400).height(400).url()}
                alt={(image as any).alt || `Gallery image ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover transform hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}