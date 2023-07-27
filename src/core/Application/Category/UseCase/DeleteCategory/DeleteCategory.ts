import { ICategoryRepository } from '../../../../Repository/CategoryRepository'
import { DeleteCategoryResponse } from './DeleteCategoryResponse'

export class DeleteCategory {
    constructor(private repository: ICategoryRepository) {}

    async execute(request: number) {
        try {
            const response = new DeleteCategoryResponse()
            await this.repository.deleteCategory(request)
            response.message = 'Le category a bien été supprimé'
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}
