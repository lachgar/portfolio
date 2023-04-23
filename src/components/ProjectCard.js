import React from 'react';
import Card from 'react-bootstrap/Card';

const projects = [
    {
        name: "Plateforme de la pré-candidature à la licence d'éducation",
        school: "Ecole Supérieure d'Education et de Formation de l'Université Chouaîb Doukkali",
        competition: "Concours passerelle S3",
        link: "https://esefj.ma/public/Accueil"
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
