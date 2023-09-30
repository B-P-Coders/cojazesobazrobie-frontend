import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Form from './components/Form/Form.jsx';
import axios from 'axios';
import pol from './assets/polish.png';
import eng from './assets/english.png';
import "./App.css";

function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation();
  const switchToPolish = () => i18n.changeLanguage('pl');
  const switchToEnglish = () => i18n.changeLanguage('en');
  const host = import.meta.env.VITE_BACKEND;
  /*axios.get("http://localhost:3000")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });*/
  return (
    <>
      <img className="lang" src={pol} onClick={switchToPolish} />
      <img className="lang" src={eng} onClick={switchToEnglish} />
      <div className="text">
        <h1 className="mainTxt">Co ja ze sobą zrobię?</h1>
        <h2>{t("Do jakiej uczelni pójdziesz?")}</h2>
      </div>
      <Form />
    </>
  )
}

export default App
