import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "Doctorat, Informatique",
            etablissement: "Université Cadi Ayyad",
            annees: "2014 - 2017",
        },
        {
            diplome: "Ingénieur d'Etat, Informatique",
            etablissement: "Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes - ENSIAS",
            annees: "2006 - 2009",
        },
        {
            diplome: "TSI - Safi",
            etablissement: "CPGE - Classes préparatoires aux grandes écoles des ingénieurs",
            annees: "2004 - 2006",
        },
        {
            diplome: "BAC - Electronique",
            etablissement: "Lycée Mohamed VI, Marrakech",
            annees: "2001 - 2004",
        },
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;
