import React from "react";
import ContactHeader from "./ContactHeader";
import Footer from "./Footer";
import Form from "./Form";

function Contact() {
  return (
    <>
      <section className="contact">
        <main className="form-main">
          <div className="form-content">
            <ContactHeader />
            <Form />
          </div>
        </main>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
