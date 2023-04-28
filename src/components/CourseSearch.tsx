import { useState } from "react";
import type { course } from "./Courses";

export default function CourseSearch({
  getSearchResults,
}: {
  getSearchResults: (data: course[]) => void;
}) {
  const [query, setQuery] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //
    const res = await fetch(`/api/courses/search?query=${query}`);

    const data = await res.json();

    getSearchResults(data);
  }

  return (
    <form onSubmit={handleSubmit} className="my-5 flex">
      <input
        type="text"
        placeholder="Search for a course"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none border-2 border-gray-200 text-gray-800 p-2 rounded-md grow"
      />
      <button className="bg-blue-800 p-2 rounded-md ml-2">Search</button>
    </form>
  );
}
