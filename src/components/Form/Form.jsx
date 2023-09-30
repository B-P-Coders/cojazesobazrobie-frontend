import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import "../../i18n";
import axios from "axios";
import "./Form.module.css";
import { Button } from "primereact/button";
import { AutoComplete } from "primereact/autocomplete";

function Form({ show, setShow }) {
    const [discipline, setDiscipline] = useState([]);
    const [disciplineValue, setDisciplineValue] = useState('');
    const [city, setCity] = useState(null);
    const [canTeacher, setCanTeacher] = useState(false);
    const [degree, setDegree] = useState(null);
    const [language, setLanguage] = useState(null);
    const [canDual, setCanDual] = useState(false);
    const [profile, setProfile] = useState(null);

    const [filteredDisciplines, setFilteredDisciplines] = useState(null);

    const { t, i18n } = useTranslation();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setShow(true);
        console.log(show);
        const userData = {
            profile: profile,
            city: city,
        };
        const host = import.meta.env.VITE_BACKEND;

        axios.get(host + "")
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const disciplines = [t("IT"), t("law"), t("aut")];

    const cities = [{ name: t("kr") }, { name: t("wa") }];

    const degrees = [{ name: t("ba") }, { name: t("ma") }];

    const languages = [{ name: t("pol") }, { name: t("eng") }];

    const profiles = [{ name: "praktyczny" }, { name: "ogólnoakademicki" }];

    const search = (event) => {
        setDiscipline(disciplineValue ? disciplines.map(item => disciplineValue + '-' + item) : disciplines);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row gap-3 m-3 justify-content-center align-items-center">
                    <div className="card flex justify-content-center">
                        <span className="p-float-label">
                            <AutoComplete value={disciplineValue} suggestions={disciplines} completeMethod={search} onChange={(e) => setDisciplineValue(e.value)} dropdown placeholder={t("f1")} />
                            <label htmlFor="dd-city" className="text-lg">
                                {t("f1")}
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
                            <label htmlFor="dd-city">{t("f2")}</label>
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
                            <label htmlFor="dd-city">{t("f3")}</label>
                        </span>
                    </div>
                </div>
                <div className="flex justify-content-center align-items-center gap-3">
                    <h3>{t("q2")}</h3>
                    <div className="mr-4">
                        <InputSwitch
                            checked={canTeacher}
                            onChange={(e) => setCanTeacher(e.value)}
                        />
                    </div>
                    <h3>{t("q3")}</h3>
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
                                placeholder={t("selectc")}
                                editable
                            />
                            <label htmlFor="dd-city">{t("selectc")}</label>
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
                                placeholder={t("prof")}
                                editable
                            />
                            <label htmlFor="dd-city" className="text-lg">
                                {t("prof")}
                            </label>
                        </span>
                    </div>
                </div>
                <div className="m-4">
                    <a href="bottom">
                        <Button
                            className=" surface-500 border-500"
                            label={t("search")}
                            icon="pi pi-check"
                            type="submit"
                        />
                    </a>
                </div>
            </form>
        </>
    );
}

export default Form;
