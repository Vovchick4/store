import mongoose from "mongoose";

const Item = mongoose.Schema( {        
    name: {type: String, required: true},
    company: {type: String},     
    price: {type: Number, required: true},
    image: {type: String}
});


export default mongoose.model('Item', Item);  