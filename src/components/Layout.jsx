import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-black">
      <Header />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
