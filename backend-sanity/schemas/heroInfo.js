export default {
    name: 'heroInfo',
    title: 'Hero Info',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'captionone',
        title: 'Caption one',
        type: 'string',
      },
      {
        name: 'captiontwo',
        title: 'Caption two',
        type: 'string',
      },
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
    ]
  }
  