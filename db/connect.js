const mongoose = require("mongoose");


mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});







const connectDB = ( uri ) => {
    console.log("connect DB");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology : true,
    });

};


module.exports = connectDB;