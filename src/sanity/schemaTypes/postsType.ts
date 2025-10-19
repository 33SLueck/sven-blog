import {defineField, defineType} from 'sanity'

export const postsType = defineType({
  name: 'posts',
  title: 'Posts List',
  type: 'object',
  fields: [defineField({name: 'title', type: 'string'})],
  preview: {
    prepare() {
      return {
        title: 'Posts List',
      }
    },
  },
})
