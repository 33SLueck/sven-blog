import {defineField, defineType} from 'sanity'

export const callToActionType = defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'subtitle', type: 'text'}),
    defineField({name: 'buttonText', type: 'string'}),
    defineField({name: 'buttonLink', type: 'url'}),
  ],
})
