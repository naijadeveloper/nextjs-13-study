import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchOneRepo(name: string) {
  const res = await fetch(
    `https://api.github.com/repos/naijadeveloper/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await res.json();
  return repo;
}

export default async function Repo({ name }: { name: string }) {
  const repo = await fetchOneRepo(name);
  return (
    <div>
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
    </div>
  );
}
