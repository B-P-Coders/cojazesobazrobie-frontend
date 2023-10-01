import { useState } from "react";
import { useTranslation } from "react-i18next";
import Form from "./components/Form/Form.jsx";
import axios from "axios";
import pol from "./assets/polish.png";
import eng from "./assets/english.png";
import "./App.css";
import List from "./components/List/List.jsx";
import logo from "./assets/logo.png";
import { useEffect } from "react";
import React from "react";

function App() {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  const switchToPolish = () => i18n.changeLanguage("pl");
  const switchToEnglish = () => i18n.changeLanguage("en");
  const host = import.meta.env.VITE_BACKEND;
  /*axios.get("http://localhost:3000")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });*/

  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="black">
        <div>
          <img className="logo" src={logo} />
          <img className="lang" src={pol} onClick={switchToPolish} />
          <img className="lang" src={eng} onClick={switchToEnglish} />
        </div>
        <div className="text">
          <h1 className="mainTxt">{t("title")}</h1>
          <h2>{t("question")}</h2>
        </div>

        <Form show={show} setShow={setShow} data={data} setData={setData} />
      </div>

      {show ? <List data={data} setData={setData} /> : ""}
    </>
  );
}

export default App;
