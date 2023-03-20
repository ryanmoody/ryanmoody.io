import * as React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto max-w-screen-xl flex flex-col">
      {children}
    </div>
  );
};

export default Container;
