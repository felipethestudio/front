import { useLazyQuery } from "@apollo/client";
import { GRAPHQL_QUERY } from "./example-queries";
import { exampleStyle } from "./example-style";

interface Props {
  post: { __typename: string; id: string; title: string; description: string };
}

const ExamplePage = ({ post }: Props) => {
  const [getPost, { data, error }] = useLazyQuery(GRAPHQL_QUERY);

  return (
    <>
      <div className="container">
        <main className="main">
          <h1 className="title">Apollo GraphQL Queries</h1>
          <p className="description" onClick={() => getPost()}>
            {data ? JSON.stringify(data.post) : "Click here to fetch on the client with useLazyQuery"}
          </p>
          <code className="code">Fetched on build time with getStaticProps</code>
          <div className="grid">{JSON.stringify(post)}</div>
        </main>
      </div>
      <style jsx>{exampleStyle}</style>
    </>
  );
};

export default ExamplePage;
