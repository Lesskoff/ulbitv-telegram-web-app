import React, { useEffect, useState } from "react";
import "./Form.css";
import useTelegram from "../../hooks/useTelegram";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const [tg] = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    });
  }, [tg]);

  useEffect(() => {
    if (!country || !street) tg.MainButton.hide();
    else tg.MainButton.show();
  }, [country, street, tg]);

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
