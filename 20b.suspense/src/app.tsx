import { useSuspenseQuery } from "@tanstack/react-query";

export function RepoSummary() {
  return <RepoDetails />;
}

function RepoDetails() {
  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      sleep(1000)
        .then(() => fetch("https://api.github.com/repos/facebook/react"))
        .then((res) => res.json()),
    // without sleep, it looks like:
    // fetch("https://api.github.com/repos/facebook/react")
    // .then((res) => res.json()),
  });

  if (isLoading) return "loading...";
  if (error) return "An error has occurred: " + error.message;

  // if we made it this far there was no error and we’re not loading
  return (
    <section>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </section>
  );
}

function sleep(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
