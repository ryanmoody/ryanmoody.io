import * as React from "react";
import Hero from "../components/Hero";
import Page from "../components/Page";

const IndexPage = () => {
  return (
    <Page>
      <Hero />
    </Page>
  );
};

export const Head = () => <title>Ryan Moody | Frontend Engineer</title>;

export default IndexPage;
