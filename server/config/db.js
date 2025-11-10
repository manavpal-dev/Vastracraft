import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected Sucessfully")
    );

    await mongoose.connect(`${process.env.MONGO_URI}`);
  } catch (error) {
    console.log(error.message, { message: "Database is not connected" });
    process.exit(1); // stop app if db fails
  }
};
export default connectDB;
