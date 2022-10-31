export default {
    name: 'aboutInfo',
    title: 'About Info',
    type: 'document',
    fields: [
      {
        name: 'backgroundInformation',
        title: 'Background Information',
        type: 'text',
      },
      {
        name: 'profilePicture',
        title: 'Profile Picture',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
    ]
  }
  