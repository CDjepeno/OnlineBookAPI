import { ICategoryRepository } from "../../../../Repository/CategoryRepository"
import { CategoryDTO } from "../../../../ValueObjects/Category"
import { UpdateCategoryResponse } from "./UpdateCategoryResponse"

export class UpdateCategory {
    constructor(private repository: ICategoryRepository) {}

    async execute(id: number, request: CategoryDTO) {
        try {
            const response = new UpdateCategoryResponse()
            const category = new CategoryDTO(
                request.name,
                request.description,
            )
            await this.repository.updateCategory(id, category)
            
            response.message = 'Le category a bien été modifié'
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}
