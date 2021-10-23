const data: any = [];

for (let i: number = 1; i < 15; i++) {
  data.push(
    {
      type: 'business',
      photo: 'https://media.gettyimages.com/photos/london-big-ben-and-traffic-on-westminster-bridge-picture-id174726708?s=612x612',
      name: `Test number ${i} b`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      price: 7,
      createdAt: Date.now() + i,
      participants: [2, 5],
      author: {
        photo: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        name: 'Anna',
        status: 'Web-designer',
        email: 'anna@gmail.com'
      },
      people: [
        {
          name: 'Test name of this person',
          photo: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'
        },
        {
          name: 'Test name of this person',
          photo: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'
        },
        {
          name: 'Test name of this person',
          photo: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'
        },
        {
          name: 'Test name of this person',
          photo: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'
        },
      ],
      schedule: {
        sunday: ['1pm', '2pm'],
        monday: ['3am', '1pm', '4pm'],
        tuesday: ['1pm', '2pm'],
        wednesday: ['4pm', '5pm', '6pm', '7pm'],
        thursday: ['1pm', '2pm'],
        friday: ['1pm', '2pm'],
        saturday: ['1pm', '2pm'],
      }
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