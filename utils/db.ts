import mongoose from "mongoose";

type isConnection = {
  isConnected?: boolean;
};

const connection: isConnection = {};

async function connectDb() {
  if (connection.isConnected) {
    console.log("Already connected to db");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState === 1;

    if (connection.isConnected) {
      console.log("Using previous connection to the database");
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
  connection.isConnected = db.connections[0].readyState === 1;
}

async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnecting from db");
    }
  }
}

const db = { connectDb, disconnectDb };
export default db;
