import {defineField, defineType} from 'sanity'

export const featureType = defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'description', type: 'text'}),
    defineField({name: 'icon', type: 'image'}),
  ],
})
