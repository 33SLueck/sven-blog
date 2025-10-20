import {client} from '@/sanity/lib/client'
import Link from 'next/link'
import type {Post, Posts} from '@/types/sanity'

async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch(`*[_type == "post"]{
    _id,
    title,
    slug,
    excerpt,
       categories[] -> { title }
  }`)
  // Sort posts by title alphabetically
  return posts.sort((a: Post, b: Post) => (a.title || '').localeCompare(b.title || ''))
}

export default async function Posts({block}: {block: Posts}) {
  const posts = await getPosts()

  // Group posts by category
  const postsByCategory: Record<string, Post[]> = {}
  posts.forEach((post) => {
    if (post.categories?.length) {
      post.categories.forEach((category) => {
        if (category.title) {
          if (!postsByCategory[category.title]) {
            postsByCategory[category.title] = []
          }
          postsByCategory[category.title].push(post)
        }
      })
    } else {
      // Group posts without a category under 'Uncategorized'
      const uncategorized = 'Uncategorized'
      if (!postsByCategory[uncategorized]) {
        postsByCategory[uncategorized] = []
      }
      postsByCategory[uncategorized].push(post)
    }
  })

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{block.title || 'Recent Posts'}</h2>
        {Object.entries(postsByCategory).map(([category, categorizedPosts]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorizedPosts.map((post) => (
                <Link key={post._id} href={`/${post.slug?.current}`}>
                  <div className="rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl transition-shadow h-full">
                    <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
