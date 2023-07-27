import { ICategoryRepository } from "../../../../Repository/CategoryRepository"
import { GetCategoryResponse } from "./GetCategoryResponse"

export class GetCategory {
    constructor(private repository: ICategoryRepository) {}

    async execute(request: number) {
        try {
            const response = new GetCategoryResponse()
            response.category = await this.repository.getCategory(request)
            return response.category

        } catch (error: any) {
            throw new Error(error)
        }
    }
}
