import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import PageRenderer from '@/components/PageRenderer'
import PostRenderer from '@/components/PostRenderer'

const query = `*[_type in ["page", "post"] && slug.current == $slug][0]{
  ...,
  _type == 'page' => {
    components[]{
      ...,
      _type == 'reference' => @->
    }
  },
  _type == 'post' => {
    "body": body[]
  }
}`

export default async function Page({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const data = await client.fetch(query, { slug: awaitedParams.slug })
  if (!data) return notFound()

  if (data._type === 'page') {
    return <PageRenderer components={data.components} />
  }

  if (data._type === 'post') {
    return <PostRenderer post={data} />
  }

  return notFound()
}
