const data: any = [];

for (let i: number = 1; i < 15; i++) {
  data.push(
    {
      type: 'business',
      photo: 'https://media.gettyimages.com/photos/london-big-ben-and-traffic-on-westminster-bridge-picture-id174726708?s=612x612',
      name: `Test number ${i} b`,
      description: 'test',
      price: 7,
      createdAt: Date.now() + i
    }
  )
}

for (let i: number = 1; i < 10; i++) {
  data.push(
    {
      type: 'development',
      photo: 'https://media.gettyimages.com/photos/london-big-ben-and-traffic-on-westminster-bridge-picture-id174726708?s=612x612',
      name: `Test number ${i} d`,
      description: 'test',
      price: 7,
      createdAt: Date.now() + i
    }
  )
}

for (let i: number = 1; i < 4; i++) {
  data.push(
    {
      type: 'finance',
      photo: 'https://media.gettyimages.com/photos/london-big-ben-and-traffic-on-westminster-bridge-picture-id174726708?s=612x612',
      name: `Test number ${i} f`,
      description: 'test',
      price: 7,
      createdAt: Date.now() + i
    }
  )
}

for (let i: number = 1; i < 32; i++) {
  data.push(
    {
      type: 'music',
      photo: 'https://media.gettyimages.com/photos/london-big-ben-and-traffic-on-westminster-bridge-picture-id174726708?s=612x612',
      name: `Test number ${i} m`,
      description: 'test',
      price: 7,
      createdAt: Date.now() + i
    }
  )
}

// data.push(
//   {
//     type: 'business',
//     photo: 'https://media.gettyimages.com/photos/london-big-ben-and-traffic-on-westminster-bridge-picture-id174726708?s=612x612',
//     name: `First`,
//     description: 'test',
//     price: 7,
//     createdAt: Date.now()
//   }
// )

// data.push(
//   {
//     type: 'business',
//     photo: 'https://media.gettyimages.com/photos/london-big-ben-and-traffic-on-westminster-bridge-picture-id174726708?s=612x612',
//     name: `Second`,
//     description: 'test',
//     price: 7,
//     createdAt: Date.now() + 1
//   }
// )

// data.push(
//   {
//     type: 'business',
//     photo: 'https://media.gettyimages.com/photos/london-big-ben-and-traffic-on-westminster-bridge-picture-id174726708?s=612x612',
//     name: `Third`,
//     description: 'test',
//     price: 7,
//     createdAt: Date.now() + 2
//   }
// )


export default data;