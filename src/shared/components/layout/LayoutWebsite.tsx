import React from "react";
import Footer from "./footer";
import Header from "./header";
import LinkOnline from "./LinkOnline";

interface Props {
  children: React.ReactNode;
}
const LayoutWebsite = ({ children }: Props) => {
  return (
    <React.Fragment>
      <main className="min-h-screen">
      <Header />
      <LinkOnline />
      {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default LayoutWebsite;
