import {defineType} from 'sanity'

export const codeBlockType = defineType({
  name: 'codeBlock',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      description: 'Programming language for syntax highlighting',
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      rows: 10,
    },
  ],
})

export default codeBlockType
