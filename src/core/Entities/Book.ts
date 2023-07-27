export interface IBook {
    id?: number
    name: string
    description: string
    author: string
    releaseAt: Date
    imageUrl: string
    fileUrl: string
    approved: number
    userId: number
    categoryId: number
    created_at?: Date
    update_at?: Date
}

export class BookDTO implements IBook {
    id?: number
    constructor(
        readonly name: string,
        readonly description: string,
        readonly author: string,
        readonly releaseAt: Date,
        readonly imageUrl: string,
        readonly fileUrl: string,
        readonly approved: number,
        readonly userId: number,
        readonly categoryId: number,
    
    ) {}
}
