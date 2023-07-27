export interface ICategory {
    id?: number
    name: string,
    description: string
    created_at?: Date
    update_at?: Date
}

export class CategoryDTO implements ICategory {
    id?: number
    constructor(
        readonly name: string,
        readonly description: string
    ){}
} 