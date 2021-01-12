import mongoose from "mongoose";
import CarSchema from "../models/Car"
import JobSchema from "../models/Job"
import HouseSchema from "../models/House"
class DbContext {
    Cars = mongoose.model("Car", CarSchema)
    Jobs = mongoose.model("Jobs", JobSchema)
    Houses = mongoose.model("Houses", HouseSchema)
}

export const dbContext = new DbContext();