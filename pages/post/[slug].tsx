import { NextPage, GetServerSideProps } from "next";
import React from "react";
import { getPostDetail } from "services/posts";
import {
  PostDeail,
  PostCategory,
  PostWidget,
  FormComment,
  BlockComment
  
} from "@components/index";
import { IPost } from "interfaces/post.interface";
import Author from "@components/author";
import { useState } from "react";

type Props = {
  postDetail: IPost;
};

const PostDetail: NextPage<Props> = ({ postDetail }) => {
  const [reload, setReload] = useState(false);
  return (
    <div className="md:grid md:grid-cols-3">
      <div className="md:col-span-2 p-4">
        <PostDeail postDetail={postDetail} />
        {/* <Author author={postDetail.author} /> */}
        <FormComment reload={reload} setReload={setReload} slug={postDetail.slug}/>
        <BlockComment reload={reload} slug={postDetail.slug}/>
      </div>
      <div className="md:col-span-1">
        <PostWidget />
        <PostCategory />
      </div>
    </div>
  );
};

export default PostDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params?.slug || "";
  // console.log(params)
  const postDetail = await getPostDetail(params);

  return {
    props: {
      postDetail,
    },
  };
};
