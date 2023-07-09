import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
const theses = [
    {
        id: 'TH1',
        title: 'Détection, classification et prédiction du Kératocône',
        author: 'AATILA Mustapha',
        degree: 'Diplômé du Master Qualité du Logiciel de la Faculté des Sciences Semlalia de Marrakech',
        supervisor: 'Ali KARTIT',
        coSupervisor: 'Mohamed LACHGAR',
        duration: '2020-2023',
    },
    {
        id: 'TH2',
        title: 'Cadre IoT pour une ferme intelligente basé sur la technique d’apprentissage automatique',
        author: 'El Mehdi RAOUHI',
        degree: 'Diplômé du Master Qualité du Logiciel de la Faculté des Sciences de Kenitra',
        supervisor: 'Ali KARTIT',
        coSupervisor: 'Mohamed LACHGAR',
        duration: '2020-2023',
    },
    {
        id: 'TH3',
        title: 'Vers une nouvelle approche de détection des maladies de la peau avec le Deep Learning',
        author: 'Amina ABOULMIRA',
        degree: 'Diplômé du Master Informatique et Modélisation des Systèmes Complexes (IMSC) de la FST Settat',
        supervisor: 'Hamid HRIMECH (LAMSAD)',
        coSupervisor: 'Mohamed LACHGAR',
        duration: '2021-2024',
    },
    {
        id: 'TH4',
        title: 'Blockchain et intelligence artificielle dans le transport et la logistique',
        author: 'Zineb KAMAL IDRISSI',
        degree: 'Diplômé de l’Ecole Nationale de Commerce et Gestion de Settat',
        supervisor: 'Hamid HRIMECH (LAMSAD)',
        coSupervisor: 'Mohamed LACHGAR',
        duration: '2022-2025',
    },
    {
        id: 'TH5',
        title: 'Grande masse de données et villes intelligentes : vers une exploitation efficace de la grande masse de données (Big Data) au profit des villes intelligentes',
        author: 'Soukaina BADRI',
        degree: 'Diplômé du Master Imagerie et informatique décisionnelle de Faculté des Sciences Dhar El Mahraz',
        supervisor: 'Hamid HRIMECH (LAMSAD)',
        coSupervisor: 'Mohamed LACHGAR',
        duration: '2022-2025',
    },
];
const ActivityComponent = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <TabView activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)}>
                <TabPanel header="Thèses Encadrées">
                    <h3></h3>
                    <div className="thesis-list">
                        {theses.map((thesis) => (
                            <div key={thesis.id} className="thesis-item">
                                <h4>{thesis.id}. {thesis.title}</h4>
                                <p><strong>{thesis.author}</strong> </p>
                                <p><strong>Diplôme:</strong> {thesis.degree}</p>
                                <p><strong>Directeur de thèse:</strong> {thesis.supervisor}</p>
                                <p><strong>Co-encadrant:</strong> {thesis.coSupervisor}</p>
                                <p><strong>Durée prévue:</strong> {thesis.duration}</p>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel header="Activités d'enseignement">
                    <h3></h3>
                    {/* Contenu pour les activités d'enseignement */}
                </TabPanel>
            </TabView>
        </div>
    );
};

export default ActivityComponent;
