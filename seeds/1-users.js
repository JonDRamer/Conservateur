"use strict";


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users')
        .insert([{
            email: 'kati@katiramer.com',
            password_digest: 'not happening',
            first_name: 'Kati',
            last_name: 'Ramer',
            artist: 'true',
            collector: 'true',
            curator: 'true'
          },
          {
            email: 'katiecraig@katiecraig.com',
            password_digest: 'not happening',
            first_name: 'Katie',
            last_name: 'Craig',
            artist: 'true',
            collector: 'false',
            curator: 'false'
          },
          {
            email: 'courtney@cleveland.com',
            password_digest: 'not happening',
            first_name: 'Courtney',
            last_name: 'Cleveland',
            artist: 'false',
            collector: 'false',
            curator: 'true'
          },
          {
            email: 'georgia@flowers.com',
            password_digest: 'not happening',
            first_name: 'Georgia',
            last_name: "O'Keeffe",
            artist: 'false',
            collector: 'true',
            curator: 'false'
          }
        ]);
    });
};
