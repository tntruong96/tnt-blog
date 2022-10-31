import request, { gql } from "graphql-request";

const graphUrl = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export const getCategories = async () => {
    const query = gql`
        query getCategories {
            categories {
                id
                name
                slug
                updatedAt
            }
        }
    `
    if(graphUrl){
        const result = await request(graphUrl, query);
        return result.categories;
    }
}


