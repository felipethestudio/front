import { useLazyQuery } from "@apollo/client";
import { GRAPHQL_QUERY } from "./example-queries";
import { exampleStyle } from "./example-style";

interface Props {
  post: { id: string; title: string; description: string };
}

const ExamplePage = ({ post }: Props) => {
  const [getData, { data, error }] = useLazyQuery(GRAPHQL_QUERY);

  return (
    <>
      <button onClick={() => getData()}>Click here to query data</button>
      <p>{data ? data.something : "Nothing yet"}</p>
      <style jsx>{exampleStyle}</style>
    </>
  );
};

export default ExamplePage;
