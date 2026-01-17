import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.URI;
const dbName = process.env.DB_NAME;

if (!uri) {
  throw new Error("Missing URI in environment variables");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let clientPromise;

if (!clientPromise) {
  clientPromise = client.connect();
}

export async function connect(collectionName) {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName).collection(collectionName);
}