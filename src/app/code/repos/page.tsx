import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const res = await fetch("https://api.github.com/users/naijadeveloper/repos", {
    next: {
      revalidate: 60,
    },
  });
  const repos = await res.json();
  const reposObject = repos.map(
    ({
      id,
      name,
      description,
      stargazers_count,
      forks_count,
      watchers_count,
    }: any) => {
      return {
        id,
        name,
        description,
        stargazers_count,
        forks_count,
        watchers_count,
      };
    }
  );

  return reposObject;
}

type repoObj = {
  id: number;
  name: string;
  login: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
};

export default async function reposPage() {
  const reposObject: repoObj[] = await fetchRepos();
  return (
    <div>
      <h1 className="text-4xl text-center underline mb-5">Repositories</h1>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-3 text-gray-800">
        {reposObject.map((repo) => (
          <li
            key={repo.id}
            className="bg-gray-300 p-2 rounded-sm flex items-center"
          >
            <Link href={`/code/repos/${repo.name}`} className="w-full">
              <h3 className="text-2xl font-bold">{repo.name}</h3>
              <p className="text-gray-500">
                {repo.description == null
                  ? "There is not description for these project"
                  : repo.description}
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="flex gap-1 items-center">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="flex gap-1 items-center">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="flex gap-1 items-center">
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
