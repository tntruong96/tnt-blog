export interface IAuthor {
    bio: string,
    id: string,
    name: string,
    photo: IPhotoAuthor,
    [key: string]: any
}

interface IPhotoAuthor {
    url: string,
    [key: string]: any
}