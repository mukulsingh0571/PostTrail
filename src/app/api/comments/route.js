import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    // Fetch comments and include related data
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }), // Filter by postSlug if provided
      },
      include: { 
        user: true, 
        post: true, // Include related post to validate its existence
      },
    });

    // Filter out comments with null or invalid post data
    const validComments = comments.filter((comment) => comment.post !== null);

    return new NextResponse(JSON.stringify(validComments), { status: 200 });
  } catch (err) {
    console.error("Error fetching comments:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};


//CREATE A COMMENT

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: {...body, userEmail: session.user.email },
      });

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
