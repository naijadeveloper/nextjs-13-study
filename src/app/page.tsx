"use client";
import { useState, useEffect } from "react";
import Courses from "@/components/Courses";
import Loader from "@/app/code/repos/loading";
import CourseSearch from "@/components/CourseSearch";
import type { course } from "@/components/Courses";

export default function Home() {
  const [courses, setCourses] = useState<course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  function getSearchResults(data: course[]) {
    setCourses(data);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="text-3xl text-center my-3">Welcome To Traversy Media</h1>
      <CourseSearch getSearchResults={getSearchResults} />
      <Courses courses={courses} />
    </>
  );
}
