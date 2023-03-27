import React, { useState } from "react";

const ShortForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(formData);
    e.target.fname.value = "";
    e.target.lname.value = "";
    e.target.ename.value = "";
    e.target.pname.value = "";
  };

  return (
    <div className="bg-blue-400 p-6">
      <form
        className="w-[360px] mx-auto p-20 border-4 border-cyan-900 rounded"
        action=""
        onSubmit={submit}
      >
        <div>
          <label htmlFor="name">First Name</label>
          <input
            className="outline-none h-10 p-4"
            type="text"
            name="fname"
            id="name"
            onBlur={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input
            className="outline-none h-10 p-4"
            type="text"
            name="lname"
            id="name"
            onBlur={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <input
            className="outline-none h-10 p-4"
            type="email"
            name="ename"
            id="name"
            onBlur={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input
            className="outline-none h-10 p-4"
            type="password"
            name="pname"
            id="name"
            onBlur={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button
          className="bg-green-900 rounded-lg mt-4 p-3 outline-none text-yellow-50"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShortForm;
