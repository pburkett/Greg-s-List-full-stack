import { dbContext } from "../db/DbContext";

class HousesService {

    async getAll(query) {
        return await dbContext.Houses.find(query)
    }

    async create(body) {
        return await dbContext.Houses.create(body)
    }

    async remove(id) {
        return await dbContext.Houses.findByIdAndDelete(id)
    }
    async edit(id, body) {
        return await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
    }
}

export const housesService = new HousesService()