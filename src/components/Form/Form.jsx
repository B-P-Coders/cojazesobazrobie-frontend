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
    const { t, i18n } = useTranslation();

    const [discipline, setDiscipline] = useState("");
    const [city, setCity] = useState("");
    const [canTeacher, setCanTeacher] = useState(false);
    const [degree, setDegree] = useState("");
    const [language, setLanguage] = useState("");
    const [canDual, setCanDual] = useState(false);
    const [profile, setProfile] = useState("");

    const [filterData, setfilterData] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShow(true);
        console.log(show);
        const userData = {
            profile: profile,
            city: city,
        };
        const host = import.meta.env.VITE_BACKEND;
        //  /schools?offset=25&limit=25&name=Administracja
        axios
            .get(host + "/schools")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const disciplines = [t("IT"), t("law"), t("aut")];

    const cities = [t("kr"), t("wa")];

    const degrees = [t("ba"), t("ma")];

    const languages = [t("pol"), t("eng")];

    const profiles = ["praktyczny", "ogólnoakademicki"];

    const search = (event, arr) => {
        console.log(arr);
        arr.map((item) => {
            const newFilterData = arr.filter((item) =>
                item.toLowerCase().includes(discipline.toLowerCase())
            );
            console.log(item);
            setfilterData(newFilterData);
            return arr;
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row gap-3 m-3 justify-content-center align-items-center">
                    <div className="card flex justify-content-center">
                        <span className="p-float-label">
                            <AutoComplete
                                value={discipline}
                                suggestions={filterData}
                                completeMethod={(e) => search(e, disciplines)}
                                onChange={(e) => setDiscipline(e.value)}
                                dropdown
                                placeholder={t("f1")}
                            />
                            <label htmlFor="dd-city">
                                {t("f1")}
                            </label>
                        </span>
                    </div>
                    <div className="card flex justify-content-center">
                        <span className="p-float-label">
                            <AutoComplete
                                value={city}
                                suggestions={filterData}
                                completeMethod={(e) => search(e, cities)}
                                onChange={(e) => setCity(e.value)}
                                dropdown
                                placeholder={t("f2")}
                            />
                            <label htmlFor="dd-city">{t("f2")}</label>
                        </span>
                    </div>
                    <div className="card flex justify-content-center">
                        <span className="p-float-label">
                            <AutoComplete
                                value={degree}
                                suggestions={filterData}
                                completeMethod={(e) => search(e, degrees)}
                                onChange={(e) => setDegree(e.value)}
                                dropdown
                                placeholder={t("f3")}
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
                            <AutoComplete
                                value={language}
                                suggestions={filterData}
                                completeMethod={(e) => search(e, languages)}
                                onChange={(e) => setLanguage(e.value)}
                                dropdown
                                placeholder={t("selectc")}
                            />
                            <label htmlFor="dd-city">{t("selectc")}</label>
                        </span>
                    </div>

                    <div className="card flex justify-content-center">
                        <span className="p-float-label">
                            <AutoComplete
                                value={profile}
                                suggestions={filterData}
                                completeMethod={(e) => search(e, profiles)}
                                onChange={(e) => setProfile(e.value)}
                                dropdown
                                placeholder={t("prof")}
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
