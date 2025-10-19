import {PortableText, PortableTextComponents} from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import {urlFor} from '@/sanity/lib/image'
import {Post} from '@/types/sanity'

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({children}) => <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>,
    h2: ({children}) => <h2 className="text-3xl font-bold mb-3 mt-6">{children}</h2>,
    h3: ({children}) => <h3 className="text-2xl font-semibold mb-2 mt-4">{children}</h3>,
    h4: ({children}) => <h4 className="text-xl font-semibold mb-2 mt-3">{children}</h4>,
  },
}

export default function PostRenderer({post}: {post: Post}) {
  const {title, mainImage, body} = post

  return (
    <article className="container mx-auto px-4 py-16">
      <Link href="/blog" className="text-blue-600 hover:underline mb-8 block">
        &larr; Back to all posts
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
      {mainImage && (
        <Image
          className="w-full h-auto max-h-96 object-cover rounded-lg mb-8"
          src={urlFor(mainImage).width(1200).height(675).url()}
          alt={title || 'Post image'}
          width={1200}
          height={675}
        />
      )}
      <div className="max-w-none">
        <PortableText value={body} components={portableTextComponents} />
      </div>
    </article>
  )
}
