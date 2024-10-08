import mongoose from "mongoose";

class Database {
  private host: string;

  constructor(host: string) {
    this.host = host;
  }

  public async connect(): Promise<Database> {
    await mongoose.connect(this.host);
    return this;
  }

  public async disconnect(): Promise<Database> {
    await mongoose.disconnect();
    return this;
  }
}

export const dbConnection = (host: string) => new Database(host);