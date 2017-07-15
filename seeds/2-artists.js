"use strict";


exports.seed = function(knex, Promise) {
  return knex('artists')
    .del()
    .then(() => {
      return knex('artists')
        .insert([{
            name: 'Kati Ramer',
            store: 'http://www.katiramer.com/available-paintings-1/',
            bio: "My work honors and explores the landscapes and flora of the desert, inspired by my upbringing in the Mojave Desert and deep love for Trans-Pecos region of West Texas. For me, the desert is full of memories and complexities. It's harsh, hot and vast. Even so, there is no other scenery so distinctly quiet, no other sunrise so overwhelmingly grand, no other sunset so incomparably tranquil. The beauty is so subtle, you have to be still to see it. There is no other place that so truly demands a quiet and present spirit. The desert invites you to set aside your many preoccupations and feel the very thing we all seek -- peace. I’m compelled to create by my belief that all things are connected, united by the same force that moves us all forward. Each being carries within them a divine spark. With each encounter with ourselves or with another, we have to choose if we will nurture that spark or tamp it out with our words, fears, judgments or actions. Art has the ability to nurture the spark, to make the artist sense their connection to others, to Earth, to the Spirit, In turn, the viewer is invited to glimpse into the artists world and for a moment be reminded of that connection. Richard Rohr writes of St. Francis of Assissi, “...Francis must have known, at least intuitively, that there is only one enduring spiritual insight and everything else follows from it: The visible world is an active doorway to the invisible world, and the invisible world is much larger than the visible. I seek to create art to this end -- an invitation to the invisible world, a urging towards our connectedness.",
            tags: 'landscape, desert, mountains, cactus, cacti, california, prickly pear, southwestern, new mexico, canvas, modern',
            headshot: 'https://static1.squarespace.com/static/5501ef32e4b0c98f96ada1cc/t/56e1b4c6ab48de6020886ad7/1457632488987/30.png?format=750w',
            img_url1: 'https://static1.squarespace.com/static/5501ef32e4b0c98f96ada1cc/57afe4c42e69cf0f1566ee99/57afe4cf59cc68f15756e62c/1471145385874/West+of+Pecos%2C+Please.jpg',
            img_url2: 'https://static1.squarespace.com/static/5501ef32e4b0c98f96ada1cc/57afe4c42e69cf0f1566ee99/57afe4cac534a5bee9bd2d44/1471145403554/The+Valley+Glows.jpg',
            img_url3: 'https://static1.squarespace.com/static/5501ef32e4b0c98f96ada1cc/57afe4c42e69cf0f1566ee99/57f3db7b579fb34674c099ec/1475599330613/Dusk+In+The+Chisos.jpg?format=1000w',
            img_url4: 'https://static1.squarespace.com/static/5501ef32e4b0c98f96ada1cc/57afe4c42e69cf0f1566ee99/57f3db7b579fb34674c099ec/1475599330613/Dusk+In+The+Chisos.jpg?format=1000w',
            user_id: 1
          },
          {
            name: 'Katie Craig',
            store: 'http://www.katiecraigart.com/originals/',
            bio: "My work captures the intriguing collision of color and motion as emphasized by brush stroke and texture. I'm inspired by the energy created when contrast and composition are properly combined. The buzz that is generated when contrasting colors or tones meet is almost tangible. I find inspiration almost everywhere, because beauty is all around us. Most of my work takes cues from nature in one way or another, whether it is the swirling motion of the wind or the pale colors of a winter sunset. I fashion my work after the energy of my inspiration. My style ranges from simple, gestural compositions of tonal layers to more detailed work that blends thousands of smaller brushstrokes to form cohesively wild pieces. My simpler work reflects my days of calm and peace. Exploiting the quiet, beautiful contrast between color and pure white makes the canvas come alive in subtle ways. On the other hand, my busier pieces reflect my drive and anxiety. In this vein of work, I push to create pieces that are just as busy as my thoughts. I find a sense of calm and purpose when I engage in either of these styles. I hope that you too can relate to and appreciate the place from which my art is created.",
            tags: 'blue, color, movement, abstract, fluid, water, canvas',
            headshot: "https://static1.squarespace.com/static/52604aa5e4b03ad13666023d/t/5653400ae4b05a6dcab7090d/1475692280853/Katie+Craig+Art_Main+Profile.jpg?format=750w",
            img_url1: 'https://static1.squarespace.com/static/52604aa5e4b03ad13666023d/54eb805be4b0904aceb8f2cd/592e0f4d15cf7d1205e35e45/1496190805188/Margarita_Katie+Craig+.jpg?format=750w',
            img_url2: 'https://static1.squarespace.com/static/52604aa5e4b03ad13666023d/54eb805be4b0904aceb8f2cd/592e0f0a3a0411d38a6dfe2d/1496190736989/June_Katie+Craig+.jpg?format=750w',
            img_url3: 'https://static1.squarespace.com/static/52604aa5e4b03ad13666023d/54eb805be4b0904aceb8f2cd/5888b728197aea16318bd344/1485354809083/Katie+Craig_Art+Show_In+All+Things_Umbrella+Gallery.JPG?format=1500w',
            img_url4: 'https://static1.squarespace.com/static/52604aa5e4b03ad13666023d/54eb805be4b0904aceb8f2cd/592e1022c534a537fbb07746/1496191018634/Gordon%27s+Sky+2+_Katie+Craig+.jpg?format=1500w',
            user_id: 2
          }
        ]);
    });
};
