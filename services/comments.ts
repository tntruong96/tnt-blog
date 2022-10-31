import request, { gql } from "graphql-request";
import { IComment } from "interfaces/post.interface";
import { json } from "stream/consumers";

export type FormData = {
  name: string;
  email: string;
  comment: string;
  slug: string;
};

type EdgesItem = {
    node: {
        name: string;
        email: string;
        comment: string;
        slug: string;
        id: string;
        createdAt: string;
    }
}


const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export const submitComment = async (formData: FormData) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return result.json();
};

export const getCommentProcess = async (slug: string) => {
  const query = gql`
    query getComment($slug: String!) {
      commentsConnection(where: { post: { slug: $slug } }) {
        edges {
          node {
            id 
            comment
            email
            name
            createdAt
          }
        }
      }
    }
  `;
  if (graphqlUrl) {
    const result = await request(graphqlUrl, query, {slug});
    return convertData(result.commentsConnection.edges);
  }
};


function convertData(commentsArr: EdgesItem[]) {
    return commentsArr.reduce<IComment[]>((prev, cur) => {
        prev.push({...cur.node})
        return prev;
    }, [])
}



export const publishComment = async (id: string) => {
    const body = {id: id}
   const result = await fetch("/api/publishComment", {
       method: 'POST',
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify(body),
   })
   return result.json();
}