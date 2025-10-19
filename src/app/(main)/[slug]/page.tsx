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

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }: PageProps) {
  const data = await client.fetch(query, { slug: params.slug })
  if (!data) return notFound()

  if (data._type === 'page') {
    return <PageRenderer components={data.components} />
  }

  if (data._type === 'post') {
    return <PostRenderer post={data} />
  }

  return notFound()
}
