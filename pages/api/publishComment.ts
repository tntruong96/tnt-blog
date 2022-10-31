import { gql, GraphQLClient } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
const graphqlToken = process.env.NEXT_PUBLIC_GRAPHQL_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(graphqlUrl){
        const graphqlClient = new GraphQLClient(graphqlUrl,{
          headers: {
            authorization: `Bearer ${graphqlToken}`,
          }
        } )
    
        const mutation = gql`
          mutation PublishComment ($id: ID!) {
            publishComment( where: { id: $id}){
                id
            }
          }
        `

        try {
            const result = await graphqlClient.request(mutation, req.body);
            if(result){
                return void res.status(200).send(result);
            }
        } catch (error: unknown) {
            // console.log(error)
            return void res.status(500).send(error);
        }

    }
    return null;
} 