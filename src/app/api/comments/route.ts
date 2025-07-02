import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/prixma";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req: { url: string | URL; }) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    // console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
    );
  }
};

// CREATE A COMMENT
export const POST = async (req: { json: () => any; }) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }), { status: 401 }
    );
  }

  try {
    const body = await req.json();
    if (!session.user || !session.user.email) {
      return new NextResponse(
        JSON.stringify({ message: "User information is missing!" }), { status: 400 }
      );
    }
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
    );
  }
};
