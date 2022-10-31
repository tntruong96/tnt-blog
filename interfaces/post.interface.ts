import { IAuthor } from "./author.interface";
import { ICategory } from "./category.interface";

export interface IPost {
    author: IAuthor,
    categories: [ICategory],
    createdAt: string,
    excerpt: string,
    id: string,
    slug: string,
    title: string,
    featuredImage: IFeatureImg,
    [key: string]: any
}

interface IFeatureImg {
    filename: string,
    id: string,
    url: string
}


export interface IComment {
    id: string,
    comment: string,
    email: string,
    name: string,
    createdAt: string
}