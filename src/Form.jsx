import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Dropdown } from "primereact/dropdown";
import './i18n';
import axios from 'axios';

function Form() {
    const [profile, setProfile] = useState(null);
    const [city, setCity] = useState(null);
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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Dropdown value={profile} onChange={(e) => setProfile(e.value)} options={profiles} optionLabel="name" placeholder="Wybierz profil" />
                <Dropdown value={city} onChange={(e) => setCity(e.value)} options={cities} optionLabel="name" placeholder="Wybierz profil" />
            </form>
        </>
    )
}

export default Form
