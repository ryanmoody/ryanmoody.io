import * as React from "react";
import Page from "../components/Page";

const AboutPage = () => {
  return (
    <Page>
      <h1 className="text-3xl font-bold uppercase">About</h1>
    </Page>
  );
};

export const Head = () => <title>Ryan Moody | About Me</title>;

export default AboutPage;
