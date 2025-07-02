// app/api/test-mongo/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/prixma"; // adjust path if needed

export async function GET() {
  try {
    const users = await prisma.user.findMany(); // test query
    return NextResponse.json({
      message: "✅ Connected to MongoDB!",
      users,
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    return NextResponse.json(
      {
        message: "❌ Failed to connect to MongoDB",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
