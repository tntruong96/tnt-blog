import React from 'react';
import { GetServerSideProps, NextPage } from 'next'
import { getPostsWithCategoryCondition } from 'services/posts';
import { IPost } from 'interfaces/post.interface';
import PostCard from '@components/post-card';
import { Empty } from 'antd';

type Props = {
    postItems: IPost[]
}

const Category: NextPage<Props> = ({postItems}) => {
    console.log(postItems);
    const renderPage = postItems.map((item) => {
        return (
            <PostCard post={item} width="w-96">

            </PostCard>
        )
    })
    return postItems.length ? (
        <div className='flex flex-wrap'>
            {renderPage}
        </div>
    ) : (
        <div className='flex justify-center items-center h-screen'>
            <Empty/>
        </div>
    );
};


export const getServerSideProps: GetServerSideProps = async (ctx) => {
     const slug = ctx.params?.slug;
     let postItems;
     if(slug && typeof(slug) === 'string'){
          postItems = await  getPostsWithCategoryCondition(slug)// your fetch function here 
     }
     console.log(postItems);
    return {
        props: {
            postItems: postItems || []
        }
    }
}

export default Category;