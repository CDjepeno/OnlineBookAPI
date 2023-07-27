import { ICategoryRepository } from "../../../../Repository/CategoryRepository"
import { GetCategoriesResponse } from "./GetCategoriesResponse"

export class GetCategories {

    constructor(private repository: ICategoryRepository) {}

    async execute() {
        const response = new GetCategoriesResponse()
        response.categories = await this.repository.getCategories()
        return response
    }
}