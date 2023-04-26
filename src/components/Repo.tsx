import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchOneRepo(name: string) {
  const res = await fetch(
    `https://api.github.com/repos/naijadeveloper/${name}`
  );
  const repo = await res.json();
  return repo;
}

export default async function Repo({ name }: { name: string }) {
  const repo = await fetchOneRepo(name);
  return <div>Repo</div>;
}
