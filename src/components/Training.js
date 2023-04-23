import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { DataView } from 'primereact/dataview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';


const formationsData = [
    {
        id: 1,
        logo: 'https://example.com/javascript.png',
        nom: 'JavaScript',
        objectif: 'Acquérir les bases de JavaScript pour développer des sites web interactifs.',
        plan: 'Introduction à JavaScript, manipulation du DOM, gestion des événements, AJAX, etc.',
        sessions: [
            {
                id: 1,
                debut: '2023-05-01',
                fin: '2023-05-15',
                nombrePlace: 20,
                lieu: 'En ligne',
                heuresParJour: 7,
                inscrits: ['Jean', 'Sophie'],
            },
            {
                id: 2,
                debut: '2023-06-01',
                fin: '2023-06-15',
                nombrePlace: 15,
                lieu: 'En ligne',
                heuresParJour: 6,
                inscrits: ['Marc'],
            },
        ],
    },
    {
        id: 2,
        logo: 'https://example.com/react.png',
        nom: 'React',
        objectif: 'Maîtriser la bibliothèque React pour développer des applications web dynamiques et performantes.',
        plan: 'Introduction à React, composants, props, state, gestion des formulaires, gestion des routes, etc.',
        sessions: [
            {
                id: 3,
                debut: '2023-05-01',
                fin: '2023-05-15',
                nombrePlace: 15,
                lieu: 'En ligne',
                heuresParJour: 8,
                inscrits: [],
            },
        ],
    },
    {
        id: 3,
        logo: 'https://example.com/react-native.png',
        nom: 'React Native',
        objectif: 'Apprendre à développer des applications mobiles pour iOS et Android avec React Native.',
        plan: 'Introduction à React Native, composants, navigation, gestion des données, etc.',
        sessions: [
            {
                id: 4,
                debut: '2023-06-01',
                fin: '2023-06-15',
                nombrePlace: 10,
                lieu: 'En ligne',
                heuresParJour: 7,
                inscrits: [],
            },
        ],
    },
    {
        id: 6,
        logo: 'https://example.com/springboot.png',
        nom: 'Spring Boot',
        objectif: 'Apprendre à développer des applications web avec Spring Boot.',
        plan: 'Introduction à Spring Boot, configuration, développement de contrôleurs REST, intégration avec une base de données, sécurité, etc.',
        sessions: [
          {
            id: 1,
            debut: '2023-08-01',
            fin: '2023-08-15',
            nombrePlace: 15,
            lieu: 'En ligne',
            heuresParJour: 6,
            inscrits: ['Pierre', 'Marie'],
          },
          {
            id: 2,
            debut: '2023-09-01',
            fin: '2023-09-15',
            nombrePlace: 20,
            lieu: 'En présentiel',
            heuresParJour: 7,
            inscrits: [],
          },
        ],
      },
      {
        id: 6,
        logo: 'https://example.com/android.png',
        nom: 'Base de la programmation Android',
        objectif: 'Apprendre les concepts de base de la programmation Android.',
        plan: 'Introduction à Android, activités, layouts, vues, ressources, etc.',
        sessions: [
            {
                id: 1,
                debut: '2023-07-01',
                fin: '2023-07-15',
                nombrePlace: 25,
                lieu: 'En présentiel',
                heuresParJour: 8,
                inscrits: ['Lucie', 'Paul', 'Julie'],
            },
            {
                id: 2,
                debut: '2023-08-01',
                fin: '2023-08-15',
                nombrePlace: 20,
                lieu: 'En ligne',
                heuresParJour: 7,
                inscrits: ['Alexandre', 'Nina'],
            },
        ],
    },
    {
        id: 4,
        logo: 'https://example.com/android.png',
        nom: 'Android avancé',
        objectif: 'Approfondir les connaissances en développement d\'applications Android.',
        plan: 'Architecture de l\'application Android, utilisation des services, gestion des notifications, intégration des APIs externes, etc.',
        sessions: [
          {
            id: 1,
            debut: '2023-07-01',
            fin: '2023-07-15',
            nombrePlace: 15,
            lieu: 'En présentiel',
            heuresParJour: 7,
            inscrits: ['Pierre', 'Marie'],
          },
          {
            id: 2,
            debut: '2023-08-01',
            fin: '2023-08-15',
            nombrePlace: 10,
            lieu: 'En ligne',
            heuresParJour: 6,
            inscrits: ['Lucie'],
          },
          {
            id: 3,
            debut: '2023-09-01',
            fin: '2023-09-15',
            nombrePlace: 20,
            lieu: 'En présentiel',
            heuresParJour: 6,
            inscrits: [],
          },
        ],
      }
      
];



const Training = () => {
    const [selectedFormation, setSelectedFormation] = useState(null);
    const toast = useRef(null);
    
    const onFormationSelect = (event) => {
        setSelectedFormation(event.data);
    };

    const onHide = () => {
        setSelectedFormation(null);
    };

    const handleInscription = (session) => {
        // TODO: logique d'inscription à une session
        console.log(`Inscription à la session ${session.id}`);
        toast.current.show({
            severity: 'info',
            summary: 'Envoyer un email',
            detail: 'Envoyer un email à lachgar.m@gmail.com',
          });
          
    };


    const formationDialogFooter = (
        <Button label="Fermer" icon="pi pi-times" className="p-button-text" onClick={onHide} />
    );

    const sessionsColumns = [
        { field: 'debut', header: 'Début' },
        { field: 'fin', header: 'Fin' },
        { field: 'nombrePlace', header: 'Nombre de places' },
        { field: 'lieu', header: 'Lieu' },
        {
            field: 'heuresParJour',
            header: 'Heures par jour',
            body: (data) => <>{data.heuresParJour} heures</>,
        },
        {
            field: 'inscription',
            header: "S'inscrire",
            body: (data) => (
                <Button
                    label="S'inscrire"
                    onClick={() => handleInscription(data)}
                    style={{ backgroundColor: '#8DC9E6' }}
                />
            ),
        },
    ];




    const formationTemplate = (formation) => {
        return (
            <Card title={formation.nom} subTitle={formation.objectif} style={{ marginBottom: '2rem' }}>
                <p>Contenu : </p>
                <p>{formation.plan}</p>
                <Button label="Afficher les sessions" icon="pi pi-search" onClick={() => setSelectedFormation(formation)} />
            </Card>
        );
    };

    return (
        <>
            <DataView value={formationsData} itemTemplate={formationTemplate} />
            <Toast ref={toast} />
            <Dialog visible={!!selectedFormation} onHide={onHide} footer={formationDialogFooter}>
                {selectedFormation && (
                    <>
                        <h2>{selectedFormation.nom}</h2>
                        <p>{selectedFormation.objectif}</p>
                        <p>{selectedFormation.plan}</p>

                        <h3>Sessions :</h3>
                        <DataTable value={selectedFormation.sessions}>
                            {sessionsColumns.map((column) => (
                                <Column key={column.field} field={column.field} header={column.header} body={column.body} />
                            ))}
                        </DataTable>

                    </>
                )}
            </Dialog>
        </>
    );
};

export default Training;
