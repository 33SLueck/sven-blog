import {defineField, defineType} from 'sanity'

export const featureListType = defineType({
  name: 'featureList',
  title: 'Feature List',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'features', type: 'array', of: [{type: 'feature'}]}),
  ],
})
