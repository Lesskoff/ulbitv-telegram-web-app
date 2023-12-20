import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");

  return (
    <form className={"form"}>
      <input
        className={"input"}
        type="text"
        placeholder={"Страна"}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"Улица"}
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <select
        className={"select"}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option value={"legal"}>Юр. лицо</option>
        <option value={"physical"}>Физ. лицо</option>
      </select>
    </form>
  );
};

export default Form;
