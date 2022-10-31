import type { IPost } from "interfaces/post.interface";
import React from "react";
import { PostDetailContainer } from "./style";
import Image from "next/image";
import { FcBusinessman, FcCalendar } from "react-icons/fc";
import moment from "moment";
import DOMPurify from "isomorphic-dompurify";

interface Props {
  readonly postDetail: IPost;
}

const PostDetail: React.FC<Props> = ({ postDetail }) => {
  // Clean html content to prevent XSS attack
  const cleanHtmlContent = DOMPurify.sanitize(postDetail.content.html);

  return (
    <PostDetailContainer className="">
      <div className="relative h-80 w-full">
        <Image
          className="rounded-md"
          objectFit="fill"
          layout="fill"
          src={postDetail.featuredImage.url}
          alt=""
        />
      </div>
      <div className="p-4 ">
        <h1 className="text-3xl font-bold">{postDetail.title}</h1>
        <div className="mb-4 flex justify-center">
          <div className="flex items-center justify-center">
            <FcBusinessman />
            <p>{postDetail.author.name}</p>
          </div>
          &nbsp;
          <div className="flex items-center justify-center">
            <FcCalendar />
            <p className="text-sm">
              {moment(postDetail.createdAt).format("MMM DD, YY")}
            </p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: cleanHtmlContent }}></div>
      </div>
    </PostDetailContainer>
  );
};

export default PostDetail;
