import { ValidationError } from 'class-validator';
import { CategoryDTO } from '../ValueObjects/Category';


export interface ICategoryRepository {

    addCategory(category: CategoryDTO): Promise<string | ValidationError[]>
    getCategory(id: number): Promise<CategoryDTO>
    getCategories(): Promise<CategoryDTO[]>
    updateCategory(id: number, body: CategoryDTO): Promise<string>
    deleteCategory(id: number)
    
}