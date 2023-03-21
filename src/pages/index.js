import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Hero from "../components/Hero";
import Page from "../components/Page";

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Page>
        <Hero />
      </Page>
    </ParallaxProvider>
  );
};

export const Head = () => <title>Ryan Moody | Frontend Engineer</title>;

export default IndexPage;
