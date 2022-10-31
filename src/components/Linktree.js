import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LinkSection from "./Link-Section";

function Linktree() {
  return (
    <>
      <div className="container">
         <section className="main-section">
          <Header />
          <LinkSection />
          <Footer />
        </section> 
      </div>
    </>
  );
}

export default Linktree;
