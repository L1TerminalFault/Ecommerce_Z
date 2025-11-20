import { clerkClient } from "@clerk/clerk-sdk-node";

export async function GET() {
  try {
    const users = await clerkClient.users.getUserList();
    console.log(users);
    return Response.json({ status: "success", users });
  } catch (error) {
    console.log("Error: ", error);
    return Response.json({ status: "error" });
  }
}
