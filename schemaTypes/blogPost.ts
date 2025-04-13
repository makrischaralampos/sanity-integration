export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'slug', type: 'string', title: 'Slug', options: {source: 'title', maxLength: 96}},
    {name: 'excerpt', type: 'text', title: 'Excerpt'},
    {name: 'content', type: 'array', title: 'Content', of: [{type: 'block'}]},
    {name: 'coverImage', type: 'image', title: 'Cover Image', options: {hotspot: true}},
    {name: 'publishedAt', type: 'datetime', title: 'Published Date'},
  ],
}
