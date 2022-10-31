import { gql, request } from "graphql-request";
import { IPost } from "interfaces/post.interface";

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

type EdgesItem = {
  node: IPost
}

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            title
            stage
            id
            excerpt
            createdAt
            slug
            featuredImage {
              fileName
              url
              id
            }
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            categories {
              name
              id
              slug
            }
            content {
              html
            }
          }
        }
      }
    }
  `;

  if (graphqlUrl) {
    const result = await request(graphqlUrl, query);

    return result.postsConnection.edges;
  }
};

export const getRecentPosts = async () => {
  const query = gql`
    query getRecent(){
      posts(orderBy: createdAt_ASC, last: 3){
        title,
        slug
        id,
        createdAt,
        featuredImage {
          url
        }
      }
    }
  `;

  if (graphqlUrl) {
    const result = await request(graphqlUrl, query);
    return result.posts;
  }
};

export const getSimilarPosts = async (slugs: string, categories: [string]) => {
  const query = gql`
    query getSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        slug
        id
        createdAt
        featuredImage {
          url
        }
      }
    }
  `;
  if (graphqlUrl) {
    const result = await request(graphqlUrl, query);
    return result.posts;
  }
};

export const getPostDetail = async (slug: string | string[]) => {
  const query = gql`
    query getPostDetail($slug: String) {
      post(where: { slug: $slug }) {
        title
        stage
        id
        createdAt
        slug
        featuredImage {
          fileName
          url
          id
        }
        author {
          name
          id
          bio
          photo {
            url
          }
        }
        categories {
          name
          id
          slug
        }
        content {
          html
        }
      }
    }
  `;

  if (graphqlUrl) {
    const result = await request(graphqlUrl, query, { slug });
    return result.post;
  }
};


export const getPostsWithCategoryCondition = async (slug: string) => {
  const query = gql`
      query getPostsViaCategoryCondition($slug: String!){
          postsConnection(where: {categories_every: {slug: $slug}}) {
              edges {
                node {
                  id
                  slug
                  title
                  featuredImage {
                    url
                  }
                  author {
                      name
                      id
                      photo {
                        url
                      }
                    }
                }
              }
            }
      }
  `

  if(graphqlUrl){
      const result = await request(graphqlUrl, query, {slug})
      return convertData(result.postsConnection.edges)
  }
}

function convertData(postsData: EdgesItem[]) {
  return postsData.reduce<IPost[]>((prev, cur) => {
      prev.push({...cur.node})
      return prev;
  }, [])
}