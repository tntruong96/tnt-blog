import type { IPost } from "interfaces/post.interface";

import moment from "moment";
import React, { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "services/posts";
import { PostWidgetItem, PostWidgetItems, WidgetContainer } from "./style";
import Image from "next/image";
import { useRouter } from "next/router";
import { SkeletonComponent } from "@components/skeleton";

interface Props {
  readonly slug?: string;
  readonly categories?: [string];
}

const PostWidget: React.FC<Props> = ({ slug, categories }) => {
  const [relatedPosts, setRelatedPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const routeOperate = (slugString: string  | undefined) => {
    router.push(`/post/${slugString}`)
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
          alt={relatedPost.featuredImage.id}
        />
      </div>

      <div className="post-widget__detail">
        <h5 className="text-lg md:text-sm font-semibold">{relatedPost.title}</h5>
        <p className="text-sm ">
          {moment(relatedPost.createdAt).format("MMM DD, YYYY")}
        </p>
      </div>
    </PostWidgetItem>
  ));

  useEffect(() => {
    try {
      setLoading(true)
      if (slug && categories) {
        getSimilarPosts(slug, categories).then((res) => {
          setRelatedPosts(res)
          setLoading(false)
        });
      } else {
        getRecentPosts().then((res) => {
          setRelatedPosts(res);
          setLoading(false)
        });
      }
    } catch (error:unknown) {
      // console.log(error);
    }
  }, [slug, router]);

  // console.log(relatedPosts);

  return (
    <WidgetContainer className="rounded-md bg-slate-200 md:w-2/3 p-4">
      <h3 className="text-center text-2xl font-semibold">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      <PostWidgetItems>{ loading ? <SkeletonComponent/> : renderRelatedPosts}</PostWidgetItems>
    </WidgetContainer>
  );
};

export default PostWidget;
