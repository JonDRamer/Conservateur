"use strict";


exports.seed = function(knex, Promise) {
  return knex('artists')
    .del()
    .then(() => {
      return knex('artists')
        .insert([{
            bio: 'Kati grew up in the desert in California.  She developed a love for the desert and has been painint it ever since.',
            user_id: 1
          },
          {
            bio: 'Katie is basically a really cool painter with lots of talent',
            user_id: 2
          }
        ]);
    });
};
