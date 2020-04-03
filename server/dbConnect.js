const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://karthikh032:Praveen2002@mongodb@karthik-tbhes.gcp.mongodb.net/github?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
