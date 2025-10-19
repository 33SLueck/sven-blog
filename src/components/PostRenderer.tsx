import Image from 'next/image'
import Link from 'next/link'
import {urlFor} from '@/sanity/lib/image'
import {Post} from '@/types/sanity'
import PortableTextRenderer from '@/components/PortableTextRenderer'

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
        {body && <PortableTextRenderer value={body} />}
      </div>
    </article>
  )
}
