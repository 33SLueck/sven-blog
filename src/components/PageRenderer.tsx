import React from 'react'
import HeroSection from './PageComponents/HeroSection'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import TextWithIllustration from './PageComponents/TextWithIllustration'
import FeatureList from './PageComponents/FeatureList'
import CallToAction from './PageComponents/CallToAction'
import Gallery from './PageComponents/Gallery'
import Posts from './PageComponents/Posts'
import {PageComponent} from '@/types/sanity'

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: object; alt?: string } }) => {
      if (!value?.asset) return null
      const src = urlFor(value).width(800).url()
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={value.alt || 'Image'} className="max-w-full h-auto rounded" />
      )
    },
    codeBlock: ({ value }: { value: { code: string; language?: string } }) => {
      if (!value?.code) return null
      return (
        <SyntaxHighlighter
          language={value.language || 'javascript'}
          style={materialLight}
          customStyle={{ borderRadius: '0.5rem', fontSize: '0.95em', margin: 0 }}
        >
          {value.code}
        </SyntaxHighlighter>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-3 mt-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mb-2 mt-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold mb-2 mt-3">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-semibold mb-2 mt-2">{children}</h5>,
    normal: ({ children }) => <p className="text-base mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 pl-4 italic text-gray-600 mb-4">{children}</blockquote>,
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PageRenderer({ components }: { components: any[] }) {
  if (!components) return null

  return (
    <div>
      {components.map((block, i) => {
        switch (block._type) {
          case 'heroSection':
            return <HeroSection key={i} {...block} />

          case 'codeBlock': {
            return (
              <SyntaxHighlighter
                key={i}
                language={block.language || 'javascript'}
                style={materialLight}
                customStyle={{ borderRadius: '0.5rem', fontSize: '0.95em', margin: 0 }}
              >
                {block.code}
              </SyntaxHighlighter>
            )
          }

          case 'blockContent': {
            return (
              <PortableText
                key={i}
                value={block.body as import("@portabletext/types").TypedObject[]}
                components={portableTextComponents}
              />
            )
          }

          case 'textWithIllustration':
            return <TextWithIllustration key={i} block={block} />

          case 'featureList':
            return <FeatureList key={i} block={block} />

          case 'callToAction':
            return <CallToAction key={i} block={block} />

          case 'gallery':
            return <Gallery key={i} block={block} />

          case 'posts':
            return <Posts key={i} block={block} />

          default:
            return <div key={i}>Unknown block type: {block._type}</div>
        }
      })}
    </div>
  )
}
 
