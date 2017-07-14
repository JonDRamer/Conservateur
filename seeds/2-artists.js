"use strict";


exports.seed = function(knex, Promise) {
  return knex('artists')
    .del()
    .then(() => {
      return knex('artists')
        .insert([{
            bio: 'Kati grew up in the desert in California.  She developed a love for the desert and has been painint it ever since.',
            tags: 'landscape, desert, mountains, cactus, cacti, california, prickly pear, southwestern, new mexico, canvas',
            img_url1: 'http://www.katiramer.com/available-paintings-1/',
            img_url2: 'http://www.katiramer.com/available-paintings-1/',
            img_url3: 'http://www.katiramer.com/available-paintings-1/',
            img_url4: 'http://www.katiramer.com/available-paintings-1/',
            user_id: 1
          },
          {
            bio: 'Katie is basically a really cool painter with lots of talent',
            tags: 'blue, color, movement, abstract, fluid, water, canvas',
            img_url1: 'http://www.katiecraigart.com/originals/texas-sunrise-original-canvas',
            img_url2: 'http://www.katiecraigart.com/originals/betsy-original-canvas',
            img_url3: 'http://www.katiecraigart.com/originals/quiet-breath-original-framed-canvas',
            img_url4: 'http://www.katiecraigart.com/originals/in-all-things-original-framed-canvas',
            user_id: 2
          }
        ]);
    });
};
