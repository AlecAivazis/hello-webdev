import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";
import fs from "fs-extra";
import { GraphQLError, GraphQLScalarType, Kind } from "graphql";
import path from "path";
import url from "url";

import { connectionFromArray } from "./util.mjs";
import { shows, genres } from "./data.mjs";

// load the graphql schema from disk
const sourceFiles = ["schema.graphql"];
const typeDefs = sourceFiles.map((filepath) => {
  const filepathToUse = path.join(
    path.dirname(url.fileURLToPath(import.meta.url)),
    filepath
  );
  return fs.readFileSync(path.resolve(filepathToUse), "utf-8");
});

const favorites = [];
function favoritesConnection() {
  return connectionFromArray(favorites.map(id => shows[id]), {})
}

// define the executable schema
const schema = createSchema({
  typeDefs,
  resolvers: {
    Show: {
      id: (show) => Buffer.from(`Show:${show.id}`).toString("base64"),
    },
    Query: {
      show(_, { id }) {
        return shows[
          parseInt(Buffer.from(id, "base64").toString().split(":")[1])
        ];
      },
      favorites: () => favoritesConnection(),
      async shows(_, args) {
        if (args.delay) {
          await sleep(args.delay);
        }

        return connectionFromArray(Object.values(shows), args);
      },
      suggestion: async (_, args) => {
        if (args.delay) {
          await sleep(args.delay);
        }

        // pick a random number between 0 and the length of the shows
        const keys = Object.keys(shows);
        return shows[keys[Math.floor(Math.random() * keys.length)]];
      },
      viewer: () => ({
        id: "1",
        profile: {
          source: "https://avatars.githubusercontent.com/u/916317?v=4",
        },
        favoriteShows: connectionFromArray(
          [shows["1"], shows["2"], shows["3"], shows["4"]],
          {}
        ),
      }),
      async genres(_, args) {
        if (args.delay) {
          await sleep(args.delay);
        }

        const list = Object.values(genres);

        return connectionFromArray(list, args);
      },
    },
    Genre: {
      shows: (self, args) => {
        // find the shows with the genre
        const with_genre = Object.values(shows).filter((show) =>
          show.genres.some((genre) => genre.id === self.id)
        );

        return connectionFromArray(with_genre, args);
      },
    },
    Mutation: {
      addFavorite: (,_ , { id }) => {
        favorites.push(parseInt(Buffer.from(id, "base64").toString().split(":")[1]));
        return {
          favorites: favoritesConnection(),
        }
      },

      removeFavorite: (,_ , { id }) => {
        favorites = favorites.filter(val => val !== id)
        return {
          favorites: favoritesConnection(),
          removedShow: id,
        }
      },
    }
  },
});

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema });

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});

const sleep = (amount) => new Promise((resolve) => setTimeout(resolve, amount));
