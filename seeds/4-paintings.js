"use strict";


exports.seed = function(knex, Promise) {
  return knex('paintings')
    .del()
    .then(() => {
      return knex('paintings')
        .insert([{
            title: 'Colors',
            description: 'The most beautiful painting in the world',
            size: '11x40',
            price: 420.00,
            imageURL: 'https://images.pexels.com/photos/51079/pexels-photo-51079.jpeg?h=350&auto=compress&cs=tinysrgb',
            artist_id: 1
          },
          {
            title: 'Bird',
            description: 'Inspired by nature',
            size: '40x40',
            price: 2000.00,
            imageURL: 'https://images.pexels.com/photos/34967/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb',
            artist_id: 1
          },
          {
            title: 'All The Green Things',
            description: "Let's Go Outside Together",
            size: '20x20',
            price: 620.00,
            imageURL: 'https://images.pexels.com/photos/159983/pexels-photo-159983.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
            artist_id: 2
          },
          {
            title: 'Vibing',
            description: 'Summer is Here',
            size: '11x11',
            price: 920.00,
            imageURL: 'https://images.pexels.com/photos/38981/pexels-photo-38981.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
            artist_id: 2
          },
        ]);
    });
};
