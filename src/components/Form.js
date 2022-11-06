import React from "react";

function Form() {
  const [holdData, setholdData] = React.useState({
    firstName: "",
    LastName: "",
    Email: "",
    textArea: "",
    haveAgreed: false,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setholdData((prevstate) => {
      return {
        ...prevstate,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(holdData);
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-holder">
          <div className="name input-height">
            <div className=" firstname i-container">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter First Name"
                onChange={handleChange}
                name="firstName"
                value={holdData.firstName}
              />
            </div>
            <div className="i-container">
              <label htmlFor="lastname">Last Name</label>
              <input
                id="last_name"
                type="text"
                placeholder="Enter Last Name"
                onChange={handleChange}
                name="LastName"
                value={holdData.LastName}
              />
            </div>
          </div>
          <div className="i-container input-height ">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="Email"
              placeholder="Yourname@gmail.com"
              onChange={handleChange}
              value={holdData.Email}
            />
          </div>
          <div className="i-container message">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="send me a message and i'll reply to you as soon as possible"
              name="textArea"
              id="message"
              value={holdData.textArea}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="haveAgreed"
              onChange={handleChange}
              checked={holdData.haveAgreed}
            />
            <label htmlFor="checkbox">
              You agree to providing your data to (name) who may contact you
            </label>
          </div>
        </div>
        <button id="btn__submit">send message</button>
      </form>
    </>
  );
}

export default Form;
