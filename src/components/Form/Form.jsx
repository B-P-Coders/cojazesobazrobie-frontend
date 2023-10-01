import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import "../../i18n";
import axios from "axios";
import "./Form.module.css";
import { Button } from "primereact/button";
import { AutoComplete } from "primereact/autocomplete";

function Form({ show, setShow, data, setData }) {
    const host = import.meta.env.VITE_BACKEND;
    const { t, i18n } = useTranslation();
    const [languages, setLanguages] = useState([]);

    const [discipline, setDiscipline] = useState("");
    const [school, setSchool] = useState("");
    const [run_form, setRun_form] = useState(false);
    const [canTeacher, setCanTeacher] = useState(false);
    const [degree, setDegree] = useState("");
    const [language, setLanguage] = useState("");
    const [canDual, setCanDual] = useState(false);
    const [profile, setProfile] = useState("");

    const [filterData, setfilterData] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShow(true);
        //  /schools?offset=25&limit=25&name=Administracja
        if (language) {
            axios
                .get(host + "/schools/search?language=" + language.toLocaleLowerCase())
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
        else if (school) {
            console.log(host + "/schools/search?institution=" + school)
            axios
                .get(host + "/schools/search?institution=" + school)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
        else if (canTeacher) {
            console.log(host + "/schools/search?is_for_teacher=" + canTeacher)
            axios
                .get(host + "/schools/search?is_for_teacher=" + canTeacher)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
        else if (run_form) {
            console.log(host + "/schools/search?run_form=" + run_form)
            axios
                .get(host + "/schools/search?run_form=" + run_form)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }

        else {
            axios
                .get(host + "/schools")
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }

    };

    useEffect(() => {
        axios
            .get(host + "/schools/languages")
            .then((response) => {
                console.log(response.data);
                const newLanguages = response.data.filter((item) => item !== null);
                setLanguages(newLanguages);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const disciplines = [t("IT"), t("law"), t("aut")];

    const schools = ["UJ", "AGH"];

    const degrees = [t("ba"), t("ma")];

    const profiles = [t("praktyczny"), t("ogólnoakademicki")];

    const temp = [];

    const search = (event, arr) => {
        console.log(arr);
        const newFilterData = arr.filter((item) =>
            item.toLowerCase().includes(discipline.toLowerCase())
        );
        setfilterData(newFilterData);
        return arr;
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
                            <label htmlFor="dd-city">{t("f1")}</label>
                        </span>
                    </div>
                    <div className="card flex justify-content-center">
                        <span className="p-float-label">
                            <AutoComplete
                                value={school}
                                suggestions={filterData}
                                completeMethod={(e) => search(e, schools)}
                                onChange={(e) => setSchool(e.value)}
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
                    <div className="mr-4">
                        <InputSwitch
                            checked={canDual}
                            onChange={(e) => setCanDual(e.value)}
                        />
                    </div>
                    <h3>{t("q4")}</h3>
                    <InputSwitch
                        checked={run_form}
                        onChange={(e) => setRun_form(e.value)}
                    />
                </div>
                <div className="flex flex-row gap-3 m-3 justify-content-center align-items-center">
                    <div className="card flex justify-content-center">
                        {languages.length > 0 && (
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
                        )}
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
                            <label htmlFor="dd-city">{t("prof")}</label>
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
