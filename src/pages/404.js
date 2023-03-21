import * as React from "react";
import Page from "../components/Page";

const NotFoundPage = () => {
  return (
    <Page>
      <div className="flex items-center gap-6">
        <h1 className="text-8xl">404</h1>
      </div>
      <p className="mt-10 text-2xl">
        This is not the <s>droid</s> page you are looking for...
      </p>
    </Page>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found!</title>;
