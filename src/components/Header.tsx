import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-orange-900 flex flex-col justify-center items-center p-4 gap-3 md:flex-row md:justify-between md:gap-0">
      <h1 className="text-xl font-bold">THIRTEEN</h1>
      <nav>
        <ul className="flex gap-3">
          <li className="bg-gray-300 p-2 rounded-md text-gray-800 hover:bg-gray-200">
            <Link href="/">Home</Link>
          </li>
          <li className="bg-gray-300 p-2 rounded-md text-gray-800 hover:bg-gray-200">
            <Link href="/about">About</Link>
          </li>
          <li className="bg-gray-300 p-2 rounded-md text-gray-800 hover:bg-gray-200">
            <Link href="/code/repos">Code Repos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
