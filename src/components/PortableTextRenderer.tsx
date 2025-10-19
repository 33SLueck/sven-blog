import React from 'react'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { PortableTextBlock } from '@portabletext/types'

// Types for custom blocks
export type CodeBlock = {
  _type: 'codeBlock'
  language?: string
  code: string
}
export type PortableTextImage = {
  _type: 'image'
  asset?: { _ref?: string; _type?: string } | { _type?: string; url?: string }
  alt?: string
}

export interface PortableTextRendererProps {
  value: PortableTextBlock[]
  className?: string
  blockOverrides?: Partial<PortableTextComponents['block']>
}

const defaultBlock: PortableTextComponents['block'] = {
  h1: ({ children }) => <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-bold mb-3 mt-6">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-semibold mb-2 mt-4">{children}</h3>,
  h4: ({ children }) => <h4 className="text-xl font-semibold mb-2 mt-3">{children}</h4>,
  h5: ({ children }) => <h5 className="text-lg font-semibold mb-2 mt-2">{children}</h5>,
  normal: ({ children }) => <p className="text-lg mb-4 leading-relaxed">{children}</p>,
  blockquote: ({ children }) => <blockquote className="border-l-4 pl-4 italic text-gray-600 mb-4">{children}</blockquote>,
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: PortableTextImage }) => {
      if (!value?.asset) return null
      const src = urlFor(value).width(800).url()
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={value.alt || 'Image'} className="max-w-full h-auto rounded" />
      )
    },
    codeBlock: ({ value }: { value: CodeBlock }) => {
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
  block: defaultBlock,
}

export const PortableTextRenderer: React.FC<PortableTextRendererProps> = ({ value, className, blockOverrides }) => {
  return (
    <div className={className}>
      <PortableText
        value={value}
        components={{
          ...components,
          block: { ...defaultBlock, ...blockOverrides } as PortableTextComponents['block'],
        }}
      />
    </div>
  )
}

export default PortableTextRenderer
