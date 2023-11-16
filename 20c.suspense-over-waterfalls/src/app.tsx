import { useQuery } from "@tanstack/react-query";

export function RepoList() {
  const { data, isLoading, error } = useQuery<{
    repositories: { owner: string; name: string }[];
  }>({
    queryKey: ["repoList"],
    queryFn: () =>
      fetch("https://api.github.com/legacy/repos/search/react?sort=stars").then(
        (res) => res.json()
      ),
  });

  if (isLoading) return "loading...";
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "no data?";

  // if we made it this far there was no error and we’re not loading
  return (
    <section style={{ display: "flex", flexDirection: "row", gap: 30 }}>
      {data.repositories.map((repo) => (
        <RepoDetails organization={repo.owner} repository={repo.name} />
      ))}
    </section>
  );
}

function RepoDetails({
  organization,
  repository,
}: {
  organization: string;
  repository: string;
}) {
  return (
    <>
      <RepoHeader organization={organization} repository={repository} />
      <RepoContributorList
        organization={organization}
        repository={repository}
      />
    </>
  );
}

function RepoHeader({
  organization,
  repository,
}: {
  organization: string;
  repository: string;
}) {
  const { data, isLoading, error } = useQuery<{
    name: string;
    description: string;
    topics: string[];
  }>({
    queryKey: ["repoData", organization, repository],
    queryFn: () =>
      fetch(
        "https://api.github.com/repos/" + organization + "/" + repository
      ).then((res) => res.json()),
  });

  if (isLoading) return "loading...";
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "no data?";

  // if we made it this far there was no error and we’re not loading
  return (
    <section>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        {data.topics.map((topic) => (
          <span
            key={topic}
            style={{
              background: "#eee",
              border: "1px solid #ccc",
              padding: 3,
              borderRadius: 5,
            }}
          >
            {topic}
          </span>
        ))}
      </div>
    </section>
  );
}

function RepoContributorList({
  organization,
  repository,
}: {
  organization: string;
  repository: string;
}) {
  const { data, isLoading, error } = useQuery<
    {
      login: string;
      avatar_url: string;
    }[]
  >({
    queryKey: ["repoContributors", organization, repository],
    queryFn: () =>
      fetch(
        "https://api.github.com/repos/" +
          organization +
          "/" +
          repository +
          "/contributors"
      ).then((res) => res.json()),
  });

  if (isLoading) return "loading...";
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "no data?";

  // if we made it this far there was no error and we’re not loading
  return (
    <section style={{ display: "flex", flexDirection: "row", gap: 30 }}>
      <h3>Contributors</h3>
      {data.map((contributor) => (
        <div
          style={{ display: "flex", flexDirection: "column" }}
          key={contributor.login}
        >
          <h2>{contributor.login}</h2>
          <img src={contributor.avatar_url} width={50} height={50} />
        </div>
      ))}
    </section>
  );
}
