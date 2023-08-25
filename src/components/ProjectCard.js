import React from 'react';
import Card from 'react-bootstrap/Card';

const projects = [
    {
        name: "Plateforme de la pré-candidature à la licence d'éducation",
        school: "Ecole Supérieure d'Education et de Formation de l'Université Chouaîb Doukkali",
        competition: "Concours passerelle S3",
        link: "https://passerelle.esefj.ucd.ac.ma/"
    },
    {
        name: "Plateforme de pré-candidature à l'Habilitation Universitaire à l'École Nationale des Sciences Appliquées d'El Jadida",
        school: "Ecole Nationale des Sciences Appliquées d'El Jadida",
        link: "http://hu.ensaj.ucd.ac.ma/accueil.php"
    },
    {
        name: "Plateforme web et mobile de gestion et de suivi des absences et des demandes de documents administratifs",
        school: "Ecole Nationale des Sciences Appliquées d'El Jadida",
        link: "https://absence.esefj.ma/public/"
    },
    {
        name: "ProfSwap - Plateforme de permutation pour les enseignants développée en MERN Stack",
        school: "Optimiser la recherche d'un partenaire pour effectuer une permutation",
        link: "https://permutation.vercel.app"
    },
    {
        name: "Site de la faculté Polydisciplinaire Sidi Bennour",
        school: "Faculté Polydisciplinaire Sidi Bennour",
        link: "https://www.fpsb.ucd.ac.ma/"
    }
];

const ProjectCard = () => {
    return (
        <div className="project-container">
            {projects.map((project, index) => (
                <Card key={index} className="project-card">
                    <Card.Body>
                        <Card.Title className="project-title">{project.name}</Card.Title>
                        {project.school && (
                            <Card.Subtitle className="project-school">{project.school}</Card.Subtitle>
                        )}
                        {project.competition && (
                            <Card.Text className="project-competition">{project.competition}</Card.Text>
                        )}
                        <Card.Link href={project.link} className="project-link">
                            Voir le projet
                        </Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </div>

    );
};

export default ProjectCard;
