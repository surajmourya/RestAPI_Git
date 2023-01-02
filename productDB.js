require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json");
//console.log("success");

const start = async () => {
    try {
        //console.log("success1");
       await connectDB(process.env.MONGODB_URL);
        //console.log("success2");
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

//console.log("success");
start();