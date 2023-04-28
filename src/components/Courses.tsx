import Link from "next/link";

// async function fetchCourses() {
//   const response = await fetch("http://localhost:3000/api/courses");
//   const courses = response.json();
//   return courses;
// }

export type course = {
  id: number;
  title: string;
  level: string;
  description: string;
  link: string;
};

export default function Courses({ courses }: { courses: course[] }) {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] w-[90%] gap-4 mx-auto">
        {courses.map(({ id, title, level, description, link }: course) => (
          <div
            key={id}
            className="bg-gray-200 flex flex-col justify-center text-gray-800 p-3 rounded-md"
          >
            <h2 className="font-bold text-lg">{title}</h2>
            <small className="text-gray-700 -mt-1">Level: {level}</small>
            <p className="mt-2">{description}</p>
            <Link
              href={link}
              target="_blank"
              className="p-2 rounded-md bg-blue-800 text-gray-200 mt-2 w-fit"
            >
              Go to courses
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
