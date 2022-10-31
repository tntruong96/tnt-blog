import type { NextPage, GetStaticProps } from 'next'
import { getPosts } from 'services/posts'
import PostCard from '@components/post-card'
import type { IPost } from 'interfaces/post.interface'
import PostWidget from '@components/post-widget'
import PostCategory from '@components/post-category'

type Props = {
  readonly posts: readonly IPost[];
}

const Home: NextPage<Props> = ({posts}) => {
  const renderPosts = posts.map( (post: IPost, index:number) => (<PostCard key={index} post={post.node}></PostCard>))
  return (
    <div className='block md:grid md:grid-cols-3'>
      <div className='col-span-2 flex flex-col justify-center items-center'>
      {renderPosts}
      </div>
      <div className="col-span-1 ">
        <PostWidget/>
        <PostCategory/>
      </div>
    </div>
  )
}

export default Home





export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = (await  getPosts()) ?? [];

  return {
    props: {
      posts
    }
  }
}