const Product = require("../models/product");


const getAllProducts = async (req, res) => {
    const { company, name } = req.query;
    const queryObject = {};

    if ( company ){
        queryObject.company = company;
        
    }
    
    if(name) {
        queryObject.name ={ $regex: name, $options: "i"};
    }
    
    
    console.log(queryObject);
    
    
    const myData = await Product.find( queryObject );
    res.status(200).json({ myData });
}; 

const getAllProductsTesting = async (req, res) => {

    const myData = await Product.find(req.query);
    console.log(" ~ file: products.js ~ line 12 ~ getAllProductsTesting ~ req.query", req.query);

    
    res.status(200).json({ myData });
}; 

module.exports = { getAllProducts, getAllProductsTesting };