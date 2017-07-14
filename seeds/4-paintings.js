"use strict";


exports.seed = function(knex, Promise) {
  return knex('paintings')
    .del()
    .then(() => {
      return knex('paintings')
        .insert([{
            title: 'The Valley Glows',
            description: 'This painting is inspired by the Mojave Desert in California',
            tags: 'landscape, mountains, neutral, sky, hot, mojave',
            size: '30x40',
            price: 420.00,
            img_url: 'https://static1.squarespace.com/static/5501ef32e4b0c98f96ada1cc/57afe4c42e69cf0f1566ee99/57afe4cac534a5bee9bd2d44/1471145403554/The+Valley+Glows.jpg',
            artist_id: 1
          },
          {
            title: 'West of Pecos, Please.',
            description: 'Abstract cactus with lots of blues.  Various shades of blues, browns, and whites blend together perfectly to make this painting neurtral enough for any room.',
            tags: 'cactus, blue, brown, white, sky, prickly pear, paddle, sharp, abstract, canvas',
            size: '30x40',
            price: 700.00,
            img_url: 'https://static1.squarespace.com/static/5501ef32e4b0c98f96ada1cc/57afe4c42e69cf0f1566ee99/57afe4cf59cc68f15756e62c/1471145385874/West+of+Pecos%2C+Please.jpg',
            artist_id: 1
          },
          {
            title: 'In All Things',
            description: "Gallery depth canvas, framed in oak Deep blues mingle with pops of lighter tones. Signed on front. Wired to hang.",
            tags: 'water, blue, framed, oak, canvas, movement, fluid, abstract, yellow, white',
            size: '48x60',
            price: 1050.00,
            img_url: 'https://static1.squarespace.com/static/52604aa5e4b03ad13666023d/54eb805be4b0904aceb8f2cd/5888b728197aea16318bd344/1485354809083/Katie+Craig_Art+Show_In+All+Things_Umbrella+Gallery.JPG?format=1500w',
            artist_id: 2
          },
          {
            title: 'Margarita',
            description: 'Acrylic + pencil. You know you want one! Signed on front and back.',
            tags: 'abstract, blue, white, margarita, beverage, drink, summer, light, bright',
            size: '8x10',
            price: 75.00,
            img_url: 'https://static1.squarespace.com/static/52604aa5e4b03ad13666023d/54eb805be4b0904aceb8f2cd/592e0f4d15cf7d1205e35e45/1496190805188/Margarita_Katie+Craig+.jpg?format=750w',
            artist_id: 2
          },
        ]);
    });
};
