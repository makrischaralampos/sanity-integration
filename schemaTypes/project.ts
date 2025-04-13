export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title', maxLength: 96}},
    {name: 'description', type: 'text', title: 'Description'},
    {name: 'techStack', type: 'array', title: 'Tech Stack', of: [{type: 'string'}]},
    {name: 'image', type: 'image', title: 'Main Image', options: {hotspot: true}},
    {name: 'url', type: 'url', title: 'Project URL'},
    {name: 'github', type: 'url', title: 'GitHub Link'},
    {name: 'date', type: 'datetime', title: 'Published Date'},
  ],
}
