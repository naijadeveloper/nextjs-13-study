import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-orange-900 flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">THIRTEEN</h1>
      <nav>
        <ul className="flex gap-3">
          <li className="bg-gray-300 p-2 rounded-md text-gray-800 hover:bg-gray-200">
            <Link href="/">Home</Link>
          </li>
          <li className="bg-gray-300 p-2 rounded-md text-gray-800 hover:bg-gray-200">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
