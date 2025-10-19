import type {CallToAction} from '@/types/sanity'

export default function CallToAction({block}: {block: CallToAction}) {
  const {title, subtitle, buttonText, buttonLink} = block
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8">{subtitle}</p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  )
}
