import mongoose from "mongoose";

const Item = mongoose.Schema( {        //задаємо поля для нашого item
    //"id": {type: Number},
    name: {type: String, required: true},
    company: {type: String},     //будемо зберігати тільки назву картинки
    price: {type: Number, required: true},
    image: {type: String}
});


export default mongoose.model('Item', Item);   //експортуємо модель яка побудована на базі схеми яку ми описали