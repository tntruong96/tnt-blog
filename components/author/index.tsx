import { IAuthor } from 'interfaces/author.interface';
import React from 'react';
import { AuthorAvatar, AuthorContainer, AuthorDetail } from './style';
import Image from 'next/image';


interface Props {
    author: IAuthor
}

const Author: React.FC<Props> = ({author}) => {
    return (
       <AuthorContainer className='bg-slate-200'>
           <AuthorAvatar>
               <Image
                    className='rounded-full m-auto'
                    height={150}
                    width={150}
                   objectFit="cover"
                   src={author.photo.url}
                   alt={author.name}
               />
           </AuthorAvatar>
           <AuthorDetail>
               <h2 className='text-3xl'>{author.name}</h2>
               <p>{author.bio}</p>
           </AuthorDetail>
       </AuthorContainer>
    );
};

export default Author;