"use strict";


exports.seed = function(knex, Promise) {
  return knex('collectors')
    .del()
    .then(() => {
      return knex('collectors')
        .insert([{
            bio: 'Kati is the founder of Conservator.  She is the original curator on the site and is practically a legend around here.',
            user_id: 1
          },
          {
            bio: 'Georgia is best known for collecting paintings of large flowers.  She has the most famous flower painting collection of anyone on the site.',
            user_id: 4
          },
        ]);
    });
};
