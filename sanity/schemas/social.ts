import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Social media platform',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url'
    },
  ],
})
