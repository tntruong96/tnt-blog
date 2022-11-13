import React,  { useState, useEffect } from "react";
import { PostCategoryContainer, PostCategoryItem } from "./style";
import type { ICategory } from "interfaces/category.interface";
import { getCategories } from "services/categories";
import Link from "next/link";
import { useRouter } from "next/router";
import { SkeletonComponent } from "@components/skeleton";


const PostCategory: React.FC = () => {
  const [listCategories, setListCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const routeFunction= () => {
    // tou
  }

  const renderCategories = listCategories.map((category) => (
      <Link key={category.id}  href={`/category/${category.slug}`} passHref>
        <a className="bg-white p-2 rounded-full m-2 w-40 overflow-hidden truncate flex justify-center cursor-pointer">{category.name}</a>
      </Link>

  ));

  useEffect(() => {
    setLoading(true);
    getCategories().then((res) => {
      setListCategories(res);
      setLoading(false);
    });
  }, [router]);

  return (
    <PostCategoryContainer className="m-5 rounded-md bg-slate-200 p-5  md:w-2/3">
      <h2 className="text-center text-2xl font-semibold">Categories</h2>
      <div className="flex flex-wrap justify place-content-center">{
          loading ?  <SkeletonComponent/> : renderCategories
      
      }</div>
    </PostCategoryContainer>
  );
};

export default PostCategory;
