import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import LinkSection from "./Link-Section";

function Linktree() {
  return (
    <>
      <div className="container">
        {/* <section className="main-section">
          <Header />
          <LinkSection />
          <Footer /> 
        </section> */}
        <Contact />
      </div>
    </>
  );
}

export default Linktree;
