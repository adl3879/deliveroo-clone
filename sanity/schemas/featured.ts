import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  type: 'document',
  title: 'Featured menu categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured category menu',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurant',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
})
