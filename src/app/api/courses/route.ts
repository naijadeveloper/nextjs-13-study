import { NextResponse } from "next/server";
import courses from "@/app/api/courses/data.json";

export async function GET(request: Request) {
  return NextResponse.json(courses);
}