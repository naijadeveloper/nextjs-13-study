import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDir";
//
import { Suspense } from "react";

type pageProps = {
  params: { name: string };
};

export default function SingleRepoPage({ params: { name } }: pageProps) {
  return (
    <div className="bg-gray-300 p-2 rounded-sm text-gray-800">
      <Suspense fallback={<div>Loading repository</div>}>
        {/* @ts-expect-error Server Component */}
        <Repo name={name} />
      </Suspense>

      <Suspense fallback={<div>Loading directories</div>}>
        {/* @ts-expect-error Server Component */}
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}
