import { IPost } from "interfaces/post.interface";

import moment from "moment";
import React from "react";
import { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "services/posts";
import { PostWidgetItem, PostWidgetItems, WidgetContainer } from "./style";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  slug?: string;
  categories?: [string];
}

const PostWidget: React.FC<Props> = ({ slug, categories }) => {
  const [relatedPosts, setRelatedPosts] = useState<IPost[]>([]);
  const router = useRouter();

  const routeOperate = (slug: string  | undefined) => {
    router.push(`/post/${slug}`)
  }

  const renderRelatedPosts = relatedPosts.map((relatedPost) => (
    <PostWidgetItem onClick={() => routeOperate(relatedPost.slug)} key={relatedPost.id} className="cursor-pointer">
      <div  className="post-widget__image ">
        <Image
          className="rounded-full"
          width={100}
          height={100}
          objectFit="cover"
          src={relatedPost.featuredImage.url}
          alt=""
        />
      </div>

      <div className="post-widget__detail">
        <h2 className="text-sm font-bold">
          {moment(relatedPost.createdAt).format("MMM DD, YYYY")}
        </h2>
        <h2 className="font-semibold">{relatedPost.title}</h2>
      </div>
    </PostWidgetItem>
  ));

  useEffect(() => {
    try {
      if (slug && categories) {
        getSimilarPosts(slug, categories).then((res) => setRelatedPosts(res));
      } else {
        getRecentPosts().then((res) => setRelatedPosts(res));
      }
    } catch (error) {
      console.log(error);
    }
  }, [slug]);

  // console.log(relatedPosts);

  return (
    <WidgetContainer className="rounded-md bg-slate-200 md:w-2/3 p-4">
      <h3 className="text-center text-2xl font-semibold">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      <PostWidgetItems>{renderRelatedPosts}</PostWidgetItems>
    </WidgetContainer>
  );
};

export default PostWidget;
