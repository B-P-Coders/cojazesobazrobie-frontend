import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import "../../i18n";
import axios from "axios";
import "./Form.module.css";
import { Button } from 'primereact/button';

function Form() {
    // pomysły na fieldy: stopień studiów ( 1 | 2 ), dla nauczyciela, język w którym jest prowadzone, czy są dualne

    const [profile, setProfile] = useState(null);
    const [city, setCity] = useState(null);
    const [canTeacher, setCanTeacher] = useState(false);
    const [degree, setDegree] = useState(null);

    const { t, i18n } = useTranslation();
    const switchToPolish = () => i18n.changeLanguage("pl");
    const switchToEnglish = () => i18n.changeLanguage("en");
    const handleSubmit = async (event) => {
        event.preventDefault();

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
                            <label htmlFor="dd-city" className="text-lg">Select a profile</label>
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
                            <label htmlFor="dd-city">Select a City</label>
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
                <InputSwitch
                    checked={canTeacher}
                    onChange={(e) => setCanTeacher(e.value)}
                />
            </form >
        </>
    );
}

export default Form;
