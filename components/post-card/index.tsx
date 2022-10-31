import { IPost } from "interfaces/post.interface";
import React from "react";
import { PostCardContainer } from "./style";
import Image from "next/image";
import moment from "moment";
import { FcCalendar, FcBusinessman } from "react-icons/fc";
import { useRouter } from "next/router";
import classNames from "classnames";


interface Props {
  post: IPost;
  width?: string;
}

const PostCard: React.FC<Props> = ({ post, width }) => {
  const router = useRouter();

  return (
    <PostCardContainer  className={classNames("mx-4 my-5 rounded-md bg-gray-200 shadow-lg", width ?  width : 'w-3/4' )}>
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          className="rounded-md"
          objectFit="fill"
          layout="fill"
          src={post.featuredImage.url}
          alt=""
        />
      </div>
      <div className="p-5">
        <p className="my-4 text-center text-xl font-extrabold cursor-pointer" onClick={() => router.push(`/post/${post.slug}`)}>{post.title}</p>
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center">
            <FcBusinessman />
            <p>{post.author.name}</p>
          </div>
          &nbsp;
          <div className="flex items-center justify-center">
            <FcCalendar />
            <p className="text-sm">
              {moment(post.createdAt).format("MMM DD, YY")}
            </p>
          </div>
        </div>
        <p>{post.excerpt}</p>
        <div className="flex w-full justify-center">
          <button className="mt-4 cursor-pointer rounded-md bg-white p-2 shadow-md" onClick={() => router.push(`/post/${post.slug}`)}>
            Continue Reading
          </button>
        </div>
      </div>
    </PostCardContainer>
  );
};

export default PostCard;
