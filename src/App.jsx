import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Form from './components/Form/Form.jsx';
import axios from 'axios';

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
      <div>
        <button onClick={switchToPolish}>Switch to Polish</button>
        <button onClick={switchToEnglish}>Switch to English</button>
        <h1>Co ja ze sobą zrobię</h1>
        <h2>
          {import.meta.env.VITE_BACKEND}
          {t('Do jakiej uczelni pójdziesz?')}
        </h2>
      </div>
      <Form />
    </>
  )
}

export default App
