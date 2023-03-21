import * as React from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";

const Page = ({ children }) => {
  return (
    <Layout>
      <Container>
        <div className="p-6">{children}</div>
      </Container>
    </Layout>
  );
};

export default Page;
