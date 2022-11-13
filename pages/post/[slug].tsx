import type { NextPage, GetServerSideProps } from "next";
import React, { useState } from "react";
import { getPostDetail } from "services/posts";
import {
  PostDeail,
  PostCategory,
  PostWidget,
  FormComment,
  BlockComment,
} from "@components/index";
import type { IPost } from "interfaces/post.interface";
import Author from "@components/author";
import SpinLoading from "@components/spin";
type Props = {
  readonly postDetail: IPost;
};

const PostDetail: NextPage<Props> = ({ postDetail }) => {
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="md:grid md:grid-cols-3">
      {loading  ? <SpinLoading/> : null}
      <div className="md:col-span-2">
        <PostDeail postDetail={postDetail} />
        {/* <Author author={postDetail.author} /> */}
        <FormComment
          reload={reload}
          setReload={setReload}
          slug={postDetail.slug}
          setLoading ={setLoading}
        />
        <BlockComment setLoading={setLoading} reload={reload} slug={postDetail.slug} />
      </div>
      <div className="hidden md:block col-span-1">
        <PostWidget />
        <PostCategory />
      </div>
    </div>
  );
};

export default PostDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params?.slug ??  "";
  // console.log(params)
  const postDetail = await getPostDetail(params);

  return {
    props: {
      postDetail,
    },
  };
};
