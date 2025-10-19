import { defineType, defineField } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'components',
      title: 'Page Components',
      type: 'array',
      of: [
       
        { type: 'codeBlock' },
        { type: 'reference', to: [{ type: 'heroSection' }] },
        { type: 'textWithIllustration' },
        { type: 'featureList' },
        { type: 'callToAction' },
        { type: 'gallery' },
        { type: 'posts' },
        // Add more custom section types as needed
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'description', title: 'Description', type: 'string' },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
  ],
})
export default pageType;