import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import '../../i18n';
import axios from 'axios';
import './Form.module.css';

function Form() {

    // pomysły na fieldy: stopień studiów ( 1 | 2 ), dla nauczyciela, język w którym jest prowadzone, czy są dualne 

    const [profile, setProfile] = useState(null);
    const [city, setCity] = useState(null);
    const [canTeacher, setCanTeacher] = useState(false);
    const [degree, setDegree] = useState(null);

    const { t, i18n } = useTranslation();
    const switchToPolish = () => i18n.changeLanguage('pl');
    const switchToEnglish = () => i18n.changeLanguage('en');
    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            profile: profile,
            city: city
        };

        try {
            const response = await axios.post('https://api.example.com/users', userData);
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const profiles = [
        { name: 'Informatyka' },
        { name: 'Prawo' },
        { name: 'Automatyka' }
    ];

    const cities = [
        { name: 'Kraków' },
        { name: 'Warszawa' }
    ];

    const degrees = [
        { name: 1 },
        { name: 2 }
    ];

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="card flex justify-content-center">
                        <Dropdown value={profile} onChange={(e) => setProfile(e.value)} options={profiles} className="w-full md:w-14rem" optionLabel="name" placeholder="Wybierz profil" editable />
                    </div>
                    <div className="card flex justify-content-center">
                        <Dropdown value={city} onChange={(e) => setCity(e.value)} options={cities} optionLabel="name" placeholder="Wybierz miasto" editable />
                    </div>
                    <div className="card flex justify-content-center">
                        <Dropdown value={degree} onChange={(e) => setDegree(e.value)} options={degrees} optionLabel="name" placeholder="Którego stopnia" editable />
                    </div>
                </div>
                <InputSwitch checked={canTeacher} onChange={(e) => setCanTeacher(e.value)} />
            </form>
        </>
    )
}

export default Form
