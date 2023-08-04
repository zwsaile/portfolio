import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Skill title',
      type: 'string'
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Skill progress 0-100',
      validation: (Rule) => Rule.min(0).max(100)
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
})
