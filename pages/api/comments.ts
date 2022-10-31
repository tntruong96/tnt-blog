// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { gql, GraphQLClient} from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next';

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
const graphqlToken = process.env.NEXT_PUBLIC_GRAPHQL_TOKEN;



export default async function  comments  (req: NextApiRequest, res: NextApiResponse) {
  if(graphqlUrl){
    const graphqlClient = new GraphQLClient(graphqlUrl,{
      headers: {
        authorization: `Bearer ${graphqlToken}`,
      }
    } )

    const query = gql`
      mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
        createComment(data: {name: $name, email: $email, comment: $comment, post:{ connect: {slug: $slug}}}){
          id
        }
      }
    `

    try {
      const result =await graphqlClient.request(query, req.body);
      return void res.status(200).send(result);
      
    } catch (error: unknown) {
      // console.log(error);
      return void res.status(500).send(error);
    }

  }
  return null;
}
