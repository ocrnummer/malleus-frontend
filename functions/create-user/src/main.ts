import { Client, Databases, Users } from "node-appwrite";
import { Models } from "appwrite";

interface RequestBody extends Models.User<Models.Preferences> {
  targets: Models.Target[];
  accessedAt: string;
}

// This Appwrite function will be executed every time your function is triggered
export default async ({ req, res, log, error }: any) => {
  // You can use the Appwrite SDK to interact with other services
  // For this example, we're using the Users service
  const client = new Client()
    .setEndpoint(Bun.env["APPWRITE_FUNCTION_API_ENDPOINT"])
    .setProject(Bun.env["APPWRITE_FUNCTION_PROJECT_ID"])
    .setKey(req.headers["x-appwrite-key"] ?? "");
  const users = new Users(client);
  const databases = new Databases(client);

  const data: RequestBody = req.bodyJson;

  try {
    const user = await databases.getDocument(
      Bun.env["DATABASE_ID"],
      Bun.env["COLLECTION_ID"],
      data.$id,
    );

    if (user) {
      return res.json({ message: "User already exists" });
    }
  } catch (e: any) {
    log("User does not exist in database. Proceed with creating the user in database.")
  }
  
  try {
    await databases.createDocument(
      Bun.env["DATABASE_ID"],
      Bun.env["COLLECTION_ID"],
      data.$id,
      {
        name: data.name,
      },
    );
    log("User created successfully");
    return res.json({ message: "User created successfully" });
  } catch (e: any) {
    error("Failed to create the user in the database");
    return res.json({ message: "Failed to create the user in the database" });
  }
}