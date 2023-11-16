export const genres = [
  { name: "Comedy", id: 1 },
  { name: "Drama", id: 2 },
  { name: "Action", id: 3 },
  { name: "RealityTV", id: 6 },
  { name: "Adventure", id: 7 },
  { name: "Animation", id: 9 },
  { name: "Crime", id: 10 },
  { name: "Thriller", id: 11 },
  { name: "Romance", id: 12 },
  { name: "Family", id: 12 },
  { name: "Horror", id: 13 },
  { name: "TalkShow", id: 14 },
].reduce(
  (shows, show) => ({
    ...shows,
    [show.id]: show,
  }),
  {}
);

export const shows = [
  {
    id: 1,
    name: "Ozark",
    poster: {
      source:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/70d82398132447.5ed5642234878.png",
    },
    billboard: {
      source:
        "https://resizing.flixster.com/TnM9akOQCX3JXed6L2zVtegUSYw=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p17789023_b_h8_aa.jpg",
    },
    description:
      "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    seasons: [1, 2, 3],
    genres: [genres[10], genres[2], genres[11]],
  },
  {
    id: 2,
    name: "Better Call Saul",
    poster: {
      source:
        "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
    },
    billboard: {
      source:
        "https://occ-0-2568-3933.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXHrRD23-SCJ7YC30D2psLQqgEVLaxyPbl9ojlOrpPTJQNkfkvkStCvRJfMDEuRNVes4sqylWQ-tmGKVlWBWxOyI1SarTOgp8sYQ.jpg?r=a9c",
    },
    description:
      "The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.",
    seasons: [4, 5, 6, 7, 8],
    genres: [genres[10], genres[2]],
  },
  {
    id: 3,
    name: "The Office",
    poster: {
      source:
        "https://m.media-amazon.com/images/I/81R7QZV5P1L._AC_UF894,1000_QL80_.jpg",
    },
    billboard: {
      source:
        "https://yt3.ggpht.com/pPPruumUXn9NkthEb5sZ8Vu_8YBJjNdXTiFNwwYcDZktOZsyFmY93jNqChifWjxRTQeYpwPveTc=w2120-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
    },
    description:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    seasons: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    genres: [genres[1]],
  },
  {
    id: 4,
    name: "Doc Martin",
    poster: {
      source: "https://flxt.tmsimg.com/assets/p8422975_b_v13_ac.jpg",
    },
    billboard: {
      source:
        "https://s3.us-east-1.amazonaws.com/zweb-s3.uploads/visiontv/wp-content/uploads/2011/10/13092324/Doc-Martin_S7_featured_1200.jpg",
    },
    description:
      "The trials and tribulations of Dr. Martin Ellingham, a socially challenged doctor who moves from London to the picturesque village of Port Wenn in Cornwall.",
    seasons: [18, 19, 20, 21, 22, 23, 24, 25, 26],
    genres: [genres[1], genres[2], genres[12]],
  },
  {
    id: 5,
    name: "The Wire",
    poster: {
      source: "https://i.ebayimg.com/images/g/AIkAAOSwxg5XzNKD/s-l1600.jpg",
    },
    billboard: {
      source:
        "https://ntvb.tmsimg.com/assets/p7892928_b_h10_ab.jpg?w=1280&h=720",
    },
    description:
      "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
    seasons: [27, 28, 29, 30, 31],
    genres: [genres[10], genres[2], genres[11]],
  },
  {
    id: 7,
    name: "Avatar: The Last Airbender",
    poster: {
      source:
        "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg",
    },
    billboard: {
      source:
        "https://occ-0-34-778.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWa6GUEhbPN67UWEf3hf9cgJqo-ChmjDXtoTDyrkoxTL9V1HexawqkAmBR13c-sxJAK83eB5NiB3dn2tkBATvfh1HzXnc6B1kuFw.jpg?r=67a",
    },
    description:
      "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar.",
    seasons: [32, 33, 34],
    genres: [genres[9], genres[3], genres[7]],
  },
  {
    id: 8,
    name: "Battlestar Galactica",
    poster: {
      source:
        "https://m.media-amazon.com/images/I/81x1wKmDkFL._AC_UF894,1000_QL80_.jpg",
    },
    billboard: {
      source:
        "https://www.syfy.com/sites/syfy/files/2021/01/battlestargalactica-season1-keyart-show-tile-1920x1080.jpg",
    },
    description:
      "When an old enemy, the Cylons, resurface and obliterate the 12 colonies, the crew of the aged Galactica protects a small civilian fleet as they journey toward the fabled 13th colony, Earth.",
    seasons: [35, 36, 37, 38],
    genres: [genres[3], genres[7], genres[2]],
  },
  {
    id: 10,
    name: "Doctor Who",
    poster: {
      source:
        "https://upload.wikimedia.org/wikipedia/en/4/43/Poster_Day-of-the-Doctor.jpg",
    },
    billboard: {
      source: "https://ichef.bbci.co.uk/images/ic/1008x567/p0b0n5gc.jpg",
    },
    description:
      "The further adventures in time and space of the alien adventurer known as the Doctor and their companions from planet Earth.",
    seasons: [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    genres: [genres[7], genres[2], genres[12]],
  },
  {
    id: 11,
    name: "Chainsaw Man",
    poster: {
      source:
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974709939/chainsaw-man-vol-1-9781974709939_hr.jpg",
    },
    billboard: {
      source:
        "https://staticg.sportskeeda.com/editor/2022/07/e944d-16586068474480-1920.jpg",
    },
    description:
      "Young devil hunter Denji's life is a living hell until he merges with his devil dog Pochita to become the ultimate devil hunter, Chainsaw Man.",
    seasons: [50, 51],
    genres: [genres[9], genres[3], genres[13]],
  },
  {
    id: 12,
    name: "Da Ali G Show",
    poster: {
      source: "https://flxt.tmsimg.com/assets/p8422827_b_v8_aa.jpg",
    },
    billboard: {
      source:
        "https://ic.c4assets.com/brands/da-ali-g-show/6e2bd164-188d-439b-8dde-187547350fe1.jpg?interpolation=progressive-bicubic&output-format=jpeg&output-quality=90{&resize}",
    },
    description:
      "Comedian Sacha Baron Cohen appears as Ali G, a rapper-wannabe from Staines, and later as Borat, a Kazakh reporter, and Brüno, an Austrian fashionista, conducting interviews on unsuspecting people.",
    seasons: [52, 53, 54],
    genres: [genres[1], genres[14]],
  },
  {
    id: 14,
    name: "The Great British Baking Show",
    poster: {
      source:
        "https://image.pbs.org/contentchannels/2969/jG4GHTFNaKemFyVHmZFP3Q.jpg",
    },
    billboard: {
      source:
        "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_39/3414748/200924-great-british-bake-off-ew-457p.jpg",
    },
    description:
      "Bakers attempt three challenges each week, trying to impress the judges with their baking skills to make it to the final round.",
    genres: [genres[6]],
  },
  {
    id: 15,
    name: "Star Trek: Deep Space Nine",
    poster: {
      source:
        "https://m.media-amazon.com/images/M/MV5BMDc3OGNhYjUtZGYwNi00MjllLWE0MjYtNDFiYmVhNWI0MGJmXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
    },
    billboard: {
      source:
        "https://warpfactortrek.com/wp-content/uploads/2023/01/DS9-in-Retrospect-collage-scaled.jpg",
    },
    description:
      "In the vicinity of the liberated planet of Bajor, the Federation space station Deep Space Nine guards the opening of a stable wormhole to the far side of the galaxy.",
    genres: [genres[3], genres[7], genres[2]],
  },
  {
    id: 16,
    name: "Top Gear",
    poster: {
      source:
        "https://m.media-amazon.com/images/M/MV5BYzkwZDgwZmQtOWE4Yy00ZjgyLTgxZTYtZTRiMTg5MWY4NTFiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    },
    billboard: {
      source:
        "https://sm.ign.com/t/ign_ap/articlepage/t/top-gear-h/top-gear-host-jeremy-clarkson-suspended-by-bbc_eq6h.1280.jpg",
    },
    description:
      "The hosts talk about everything car-related. From new cars to how they're fueled, this show has it all.",
    genres: [genres[1], genres[14]],
  },
  {
    id: 17,
    name: "Fullmetal Alchemist: Brotherhood",
    poster: {
      source:
        "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    },
    billboard: {
      source:
        "https://gritdaily.com/wp-content/uploads/2020/06/fullmetal-alchemist-brotherhood.jpg",
    },
    description:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    genres: [genres[9], genres[3], genres[7]],
  },
  {
    id: 18,
    name: "Haikyuu!!",
    poster: {
      source:
        "https://m.media-amazon.com/images/M/MV5BNjkyNDI2MTgtN2Y3NS00M2RjLWJhNDMtMmNmZmUwMDQwZTE1XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    },
    billboard: {
      source:
        "https://img.buzzfeed.com/buzzfeed-static/static/2021-04/20/17/campaign_images/4b34c94ad75b/how-a-sports-anime-called-haikyuu-helped-me-get-t-2-22925-1618939026-10_dblbig.jpg?resize=1200:*",
    },
    description:
      "Determined to be like the volleyball championship's star player Shouyou, a short boy nicknamed 'the small giant,' joins his school's volleyball club.",
    genres: [genres[9], genres[1], genres[2]],
  },
  {
    id: 19,
    name: "Breaking Bad",
    poster: {
      source:
        "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    },
    billboard: {
      source:
        "https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_.jpg",
    },
    description:
      "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
    genres: [genres[10], genres[2], genres[11]],
  },
  {
    id: 20,
    name: "Queer Eye",
    poster: {
      source:
        "https://m.media-amazon.com/images/M/MV5BMTdiYmYxYjItYjU2OS00NTU3LWJhYTAtYzIxYmNjOTkwMTE0XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_.jpg",
    },
    billboard: {
      source:
        "https://www.tvguide.com/a/img/resize/03d1b99996baa635bb69316ac3e12c9326235448/catalog/provider/1/1/1-7590629307.jpg?auto=webp&fit=crop&height=675&width=1200",
    },
    description:
      "A new Fab Five set out to help people improve their lives by refining their wardrobes, grooming, diet, cultural pursuits, and home décor.",
    genres: [genres[6]],
  },
  {
    id: 21,
    name: "The Queen's Gambit",
    poster: {
      source:
        "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
    },
    billboard: {
      source:
        "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2021-08/queens-gambit-netlfix-ftr_vc8iatnuhen01ugcnjwn35s4u.jpg?itok=V7kEOa9P",
    },
    description:
      "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
    genres: [genres[2]],
  },
].reduce(
  (shows, show) => ({
    ...shows,
    [show.id]: show,
  }),
  {}
);
