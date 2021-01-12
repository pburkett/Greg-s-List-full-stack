import mongoose from "mongoose"
const Schema = mongoose.Schema

const House = new Schema({
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    levels: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: String, required: true },
    description: { type: String }
})

export default House