import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import "../../i18n";
import axios from "axios";
import "./Form.module.css";
import { Button } from "primereact/button";

function Form({ show, setShow }) {
  const [profile, setProfile] = useState(null);
  const [city, setCity] = useState(null);
  const [canTeacher, setCanTeacher] = useState(false);
  const [degree, setDegree] = useState(null);
  const [language, setLanguage] = useState(null);
  const [canDual, setCanDual] = useState(false);
  const [isced, setIsced] = useState(null);

  const { t, i18n } = useTranslation();
  const switchToPolish = () => i18n.changeLanguage("pl");
  const switchToEnglish = () => i18n.changeLanguage("en");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setShow(true);
    console.log(show);
    const userData = {
      profile: profile,
      city: city,
    };

    try {
      const response = await axios.post(
        "https://api.example.com/users",
        userData
      );
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const profiles = [{ name: t("IT") }, { name: t("law") }, { name: t("aut") }];

  const cities = [{ name: t("kr") }, { name: t("wa") }];

  const degrees = [{ name: t("ba") }, { name: t("ma") }];

  const languages = [
    { name: "brak" },
    { name: "słowacki" },
    { name: "chorwacki" },
    { name: "ukraiński" },
    { name: "polski" },
    { name: "uzbecki" },
    { name: "czeski" },
    { name: "inny język" },
    { name: "arabski" },
    { name: "rosyjski" },
    { name: "serbski" },
    { name: "włoski" },
    { name: "szwedzki" },
    { name: "norweski" },
    { name: "angielski" },
    { name: "bułgarski" },
    { name: "niemiecki" },
    { name: "holenderski" },
    { name: "węgierski" },
    { name: "portugalski" },
    { name: "koreański" },
    { name: "łacina" },
    { name: "francuski" },
    { name: "hiszpański" },
  ];

  const isceds = [{}];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-3 m-3 justify-content-center align-items-center">
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <Dropdown
                value={profile}
                onChange={(e) => setProfile(e.value)}
                options={profiles}
                className="w-full md:w-14rem"
                optionLabel="name"
                placeholder={t("f1")}
                editable
              />
              <label htmlFor="dd-city" className="text-lg">
                Select a profile
              </label>
            </span>
          </div>
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <Dropdown
                value={city}
                onChange={(e) => setCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder={t("f2")}
                editable
              />
              <label htmlFor="dd-city">Select a city</label>
            </span>
          </div>
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <Dropdown
                value={degree}
                onChange={(e) => setDegree(e.value)}
                options={degrees}
                optionLabel="name"
                placeholder={t("f3")}
                editable
              />
              <label htmlFor="dd-city">Select a degree</label>
            </span>
          </div>
        </div>
        <div className="flex justify-content-center align-items-center gap-3">
          <h3>Czy studia mają zapewnić kwalifikacje nauczycielskie?</h3>
          <div className="mr-4">
            <InputSwitch
              checked={canTeacher}
              onChange={(e) => setCanTeacher(e.value)}
            />
          </div>
          <h3>Czy studia mają być dualne?</h3>
          <InputSwitch
            checked={canDual}
            onChange={(e) => setCanDual(e.value)}
          />
        </div>
        <div className="flex flex-row gap-3 m-3 justify-content-center align-items-center">
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <Dropdown
                value={language}
                onChange={(e) => setLanguage(e.value)}
                options={languages}
                optionLabel="name"
                placeholder={t("f2")}
                editable
              />
              <label htmlFor="dd-city">Select a language</label>
            </span>
          </div>
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <Dropdown
                value={isced}
                onChange={(e) => setIsced(e.value)}
                options={isceds}
                className="w-full md:w-14rem"
                optionLabel="name"
                placeholder={t("f1")}
                editable
              />
              <label htmlFor="dd-city" className="text-lg">
                Select isced
              </label>
            </span>
          </div>
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <Dropdown
                value={profile}
                onChange={(e) => setProfile(e.value)}
                options={profiles}
                className="w-full md:w-14rem"
                optionLabel="name"
                placeholder={t("f1")}
                editable
              />
              <label htmlFor="dd-city" className="text-lg">
                Select a profile
              </label>
            </span>
          </div>
        </div>
        <div className="m-4">
          <Button label="Submit" icon="pi pi-check" type="submit" />
        </div>
      </form>
    </>
  );
}

export default Form;
