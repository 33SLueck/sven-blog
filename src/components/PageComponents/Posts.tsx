import {client} from '@/sanity/lib/client'
import Link from 'next/link'
import type {Posts, Post} from '@/types/sanity'

async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch(`*[_type == "post"]{
    _id,
    title,
    slug,
    excerpt,
  }`)
  return posts
}

export default async function Posts({block}: {block: Posts}) {
  const posts = await getPosts()
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{block.title || 'Recent Posts'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post) => (
            <Link key={post._id} href={`/${post.slug?.current}`}>
              <div className="rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </Link>          
          ))}
        </div>
      </div>
    </section>
  );
}
