import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import PageRenderer from '@/components/PageRenderer'

// Fetch the content for the page with the slug "home"
const query = `*[_type == "page" && slug.current == "home"][0]{
  ...,
  components[]{
    ...,
    _type == 'reference' => @->
  }
}`

export default async function HomePage() {
  const page = await client.fetch(query)
  if (!page) return notFound()

  return <PageRenderer components={page.components} />
}