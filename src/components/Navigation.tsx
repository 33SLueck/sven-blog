import {client} from '@/sanity/lib/client'
import Link from 'next/link'

interface Page {
  _id: string
  title: string
  slug: {
    current: string
  }
}

async function getPages(): Promise<Page[]> {
  const pages = await client.fetch(`*[_type == "page" && slug.current != "home" && !(_id in path("drafts.**"))]{
    _id,
    title,
    slug,
  }`)
  return pages
}

export default async function Navigation() {
  const pages = await getPages()
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-emerald-700">
          My Blog
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {pages.map((page) => (
              <li key={page._id}>
                <Link
                  href={`/${page.slug.current}`}
                  className="text-gray-200 hover:text-emerald-600 text-lg font-semibold transition-colors"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
