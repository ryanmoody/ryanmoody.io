import * as React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export const Head = () => <title>Ryan Moody | Frontend Engineer</title>;

export default IndexPage;
