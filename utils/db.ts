import mongoose from "mongoose";

type isConnection = {
  isConnected?: boolean;
};

const connection: isConnection = {};

export async function ConnectDb() {
  if (connection.isConnected) {
    console.log("Already connected to db");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState === 1;

    if (connection.isConnected) {
      console.log("Use previous connection to the database");
      return;
    }
    await mongoose.disconnect();
  }

  const connectionUrl = process.env.MONGODB_URL;
  if (!connectionUrl) {
    throw new Error("Please add connection url");
  }

  const db = await mongoose.connect(connectionUrl);
  console.log("connnected to the database");
}
