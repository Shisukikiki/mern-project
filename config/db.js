const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://aki:aki" + process.env.DB_USER_PASS + "@cluster0.8qz1gz8.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
