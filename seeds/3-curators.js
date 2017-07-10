"use strict";


exports.seed = function(knex, Promise) {
  return knex('curators')
    .del()
    .then(() => {
      return knex('curators')
        .insert([{
            bio: 'Kati is the founder of Conservator.  She is the original curator on the site and is practically a legend around here.',
            user_id: 1
          },
          {
            bio: 'Courtney is from Louisianna. She is an LSU grad and is one of the most popular curators on the Conservator',
            user_id: 3
          }
        ]);
    });
};
