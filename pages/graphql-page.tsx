import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Head from "next/head";
import { gql, useLazyQuery } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";
import styles from "../styles/Home.module.css";

const GRAPHQL_QUERY = gql`
  query {
    post(id: "1") {
      id
      title
      body
    }
  }
`;

/////////// FETCH DATA /////////////////////////////////////////////////////////////////////

export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch("http://...");
  // const data = await res.json();

  const variables = { id: "1" };
  const apolloClient = initializeApollo();
  const { data, error } = await apolloClient.query({ query: GRAPHQL_QUERY, variables });
  if (error) console.log(error);

  return { props: { post: data.post } };
};

/////////// PAGE //////////////////////////////////////////////////////////////////////////

interface Props {
  post: { __typename: string; id: string; title: string; description: string };
}

const GraphQLPage: NextPage<Props> = ({ post }) => {
  const [getPost, { data, error }] = useLazyQuery(GRAPHQL_QUERY);

  return (
    <div className={styles.container}>
      <Head>
        <title>Apollo GraphQL Queries</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Apollo GraphQL Queries</h1>
        <p className={styles.description} onClick={() => getPost()}>
          {data ? JSON.stringify(data.post) : "Click here to fetch on the client with useLazyQuery"}
        </p>
        <code className={styles.code}>Fetched on build time with getStaticProps</code>
        <div className={styles.grid}>{JSON.stringify(post)}</div>
      </main>
    </div>
  );
};

export default GraphQLPage;
