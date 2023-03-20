import * as React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto max-w-screen-lg flex flex-col p-10">
      {children}
    </div>
  );
};

export default Container;
