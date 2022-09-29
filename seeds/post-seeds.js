const { Post } = require("../models");

const postData = [
  {
    user_id: 1,
    title: "Upcoming Bachata Social",
    content:
      "Do you know, how to Bachata? Come join the Bachata Society and learn how to dance. Bachata dance is known for its love stories, and its syncopated rhythm. The dance actually was born of the music in the Dominican Republic during the 1960s.",
    location: "UCSD Price Center Ballroom East",
  },
  {
    user_id: 2,
    title: "Oro Solido",
    content:
      "Whether you prefer Haitian or Dominican Merengue, come join us as we practice both!",
    location: "Rumba Lounge",
  },
  {
    user_id: 3,
    title: "Salsa",
    content:
      "You might know about salsa in your food, but do you know how to dance it? We want to teach you how to strut on the dancefloor!",
    location: "Melómano Entertainment - Salsa & Bachata Lessons",
  },
  {
    user_id: 4,
    title: "Upbeat",
    content: "Doo wap doo wap doo wap doo wap! If you like jazz, follow us cool cats and learn how to smoothly step in time.",
    location: "Dizzys",
  },
  {
    user_id: 2,
    title: "Celebrating Diversity & All Abilities: An Inclusive Dance Showcase",
    content:
      "Dance is for everyone! Join us for an afternoon of inclusive dance as the students and instructors of WDO Inclusive Dance strut their stuff.",
    location: "Champion Ballroom Academy",
  },
  {
    user_id: 3,
    title: "San Diego Drink, Ride, Sing, & Dance! Bar Tour (4 bars included)",
    content:
      "Have the BEST night out with your friends while taking part in the FUNNEST activities there are in San Diego's Gaslamp Quarter! ",
    location: "Double Deuce",
  },
  {
    user_id: 4,
    title: "This Party Is Killing You! (All Robyn Dance Party) at The Whistle Stop",
    content:
      "This Party Is Killing You!, The all Robyn Dance Party Thursday November 3 The Whistle Stop San Diego",
    location: "Whistle Stop",
  },
  {
    user_id: 1,
    title: "Adult Intermediate Contemporary Dance Class",
    content: "Join us every Monday at 7pm for beginning contemporary dance with Adley! Experience modern and jazz styles fused with lyrical expressions, to create a fluid dance experience.",
    location: "The Dancehouse",
  },
  {
    user_id: 1,
    title: "Upcoming Bachata Social",
    content:
      "Group x will be holding and event in x location. We hope you can come and join us",
    location: "Balboa Park",
  },
  {
    user_id: 2,
    title: "SINING SAMAHAN - 45th Annual Concert of Philippine Music & Dance",
    content:
      "Experience a cultural tour of the Philippines while viewing the exhilarating dances and live music of various regions of the country.",
    location: "Joan B. Kroc Theatre",
  },
  {
    user_id: 4,
    title: "Salsa Sundays",
    content:
      "If you are an intermediate salsa dancer you might want to come to our social dance ",
    location: "UCSD Bulding x",
  },
  {
    user_id: 3,
    title: "Dance the Night Away!",
    content: "All ages are welcome. We have two group classes, plus DJ Bodyrawk and Positive Energy Dance company instructors Rosey Elizabeth and Michael John Saltus . Social dancing till Late. $15 general admission.",
    location: "Queen Bee's Art and Cultural Center    ",
  },
  {
    user_id: 1,
    title: "Upcoming Bachata Social",
    content:
      "Group x will be holding and event in x location. We hope you can come and join us",
    location: "Balboa Park",
  },
  {
    user_id: 3,
    title: "Karaoke & Dance Night at Kimball Coastal Eatery",
    content:
      "Come Join Us @Kimballsd For A Fun Night Of Karaoke & Dance. All ages, No cover, Best Food & Cocktails in San Diego!",
    location: "Kimball Coastal Eatery",
  },
  {
    user_id: 4,
    title: "Afrobeat fitness dance class at WORLD BEAT CENTER in BALBOA PARK TUESDAY",
    content:
      "Get ready to dance sweat and be challenged with the hottest and latest music in Africa right now! I will be your instructor led Zumba style!",
    location: "WorldBeat Cultural Center",
  },
  {
    user_id: 4,
    title: "¡PON BAD BUNNY!",
    content: "¡PON BAD BUNNY! AN EVENING DEDICATED TO BENITO",
    location: "Quartyard",
  },
  {
    user_id: 1,
    title: "Upcoming Bachata Social",
    content:
      "Group x will be holding and event in x location. We hope you can come and join us",
    location: "Balboa Park",
  },
  {
    user_id: 3,
    title: "La Chimi Flamenco Show",
    content:
      "La Chimi Flamenco Show with live music also featuring singer Pepele Mendez from Southern Spain",
    location: "North Park",
  },
  {
    user_id: 2,
    title: "Salsa is life",
    content:
      "If you are an intermediate salsa dancer you might want to come to our social dance ",
    location: "First Unitarian Universalist Church of San Diego ",
  },
  {
    user_id: 3,
    title: "Halloween Dance",
    content: "Get your costumes ready and your Boo-gie on because we are hosting our first Stay Social dance party!!!",
    location: "Encinitas Community and Senior Center",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
