import Link from "next/link";

export default function about() {
  return (
    <div className="mt-4">
      <Link
        href="/about/team"
        className="inline-block bg-gray-300 p-2 rounded-md text-gray-800 hover:bg-gray-200"
      >
        Team
      </Link>
    </div>
  );
}
