import { graphql } from "relay-runtime";
import "./styles.css";
import { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import { HomeQuery } from "__generated__/HomeQuery.graphql";

export function Home() {
  return (
    <Suspense fallback="loading...">
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const data = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        shows {
          edges {
            node {
              name
            }
          }
        }
      }
    `,
    {}
  );

  return (
    <div>
      {data.shows.edges.map(({ node }) => (
        <div>{node.name}</div>
      ))}
    </div>
  );
}
