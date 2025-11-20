import { clerkClient } from "@clerk/clerk-sdk-node";

export async function POST(request: Request) {
  const {
    userId,
    toggleAdmin,
  }: {
    userId: string;
    toggleAdmin: boolean;
  } = await request.json();

  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        isAdmin: toggleAdmin,
      },
    });

    return Response.json({ status: "success" });
  } catch (error) {
    console.log("Error: ", error);
    return Response.json({ status: "error" });
  }
}
