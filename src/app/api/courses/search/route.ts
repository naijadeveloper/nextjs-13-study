import { NextResponse } from "next/server";
import courses from "@/app/api/courses/data.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const filteredCourse = courses.filter(course => course.title.toLowerCase().includes((query as string).toLowerCase()));

  return NextResponse.json(filteredCourse);
}