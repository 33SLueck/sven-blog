import {defineField, defineType} from 'sanity'

export const heroType = defineType({
 name: 'heroSection',
  title: 'HeroSection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'CTAText',
      type: 'string',
    }),
    defineField({
      name: 'CTALink',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      type: 'string',
    }),

  ],
});