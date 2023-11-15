import { useQuery } from "@tanstack/react-query";

export function RepoSummary() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      sleep(1000)
        .then(() => fetch("https://api.github.com/repos/facebook/react"))
        .then((res) => res.json()),
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

function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
