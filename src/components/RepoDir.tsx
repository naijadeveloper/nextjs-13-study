import Link from "next/link";

async function fetchRepoContents(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(
    `https://api.github.com/repos/naijadeveloper/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await res.json();
  return contents;
}

export default async function RepoDirs({ name }: { name: string }) {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter(({ type }: { type: string }) => type === "dir");
  return (
    <div>
      <h3 className="text-2xl text-gray-800 mt-3">Directories</h3>
      <ul>
        {dirs.map(({ path }: { path: string }) => (
          <li key={path}>
            <span className="text-gray-800 font-bold inline-block mr-2">
              --
            </span>
            <Link
              href={`/code/repos/${name}/${path}`}
              className="underline hover:text-blue-800 decoration-2 capitalize"
            >
              {path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
