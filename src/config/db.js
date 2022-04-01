const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://yadav9452:1234@cluster0.fwbh6.mongodb.net/new?retryWrites=true&w=majority")
};
