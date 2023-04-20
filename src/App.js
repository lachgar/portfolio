// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Cours from "./components/Cours";
import Publications from "./components/Publications";
import Projets from "./components/Projets";
import ProfileImage from "./components/ProfileImage";
import { Card } from 'primereact/card';
import { Analytics } from '@vercel/analytics/react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import Experiences from "./components/Experiences";
import Formations from "./components/Formations";
import Gallery from "./components/Gallery";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* En-tête */}
        <header className="header">
          <ProfileImage />
          <h1>Pr. Mohamed LACHGAR</h1>
          <h2>Professeur Universitaire</h2>
        </header>

        {/* Menu de navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formations" className="nav-link">
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experiences" className="nav-link">
                Expériences
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cours" className="nav-link">
                Cours
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publications" className="nav-link">
                Publications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projets" className="nav-link">
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Galerie" className="nav-link">
                Galerie
              </Link>
            </li>
          </ul>

        </nav>

        {/* Contenu de la page */}
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/Galerie" element={<Gallery />} />
          </Routes>
        </div>

        {/* Pied de page */}
        <footer className="footer">
          <p>@lachgar.m@gmail.com </p>
        </footer>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

// Composant Accueil
function Accueil() {
  return (
    <section className="section">
      <Card title="Mohamed LACHGAR">
        <p className="m-0">
          Ingénieur d'État en Informatique diplômé de l'ENSIAS en 2009 et titulaire d'un doctorat en informatique obtenu à l'Université Cadi Ayyad en 2017, est également professeur en informatique à l'École Nationale des Sciences Appliquées de l'Université Chouaib Doukkali, El Jadida, Maroc. Ses domaines de recherche englobent le développement d'outils d'automatisation dans les logiciels embarqués, la modélisation et la conception de logiciels, la conception de métamodèles, la transformation de modèles, les méthodes de vérification et de validation de modèles, ainsi que l'application du machine learning et du deep learning dans plusieurs domaines.
        </p>
        <p className="m-0">
          En tant que concepteur et formateur spécialisé dans les technologies JAVA, il met en avant les outils et solutions Open Source pour le développement de projets Internet et mobile. Il dispense des cours sur la plate-forme Java Enterprise Edition (JEE), la programmation mobile, la programmation web, la programmation multiplateforme, l'architecture des applications d'entreprises (JEE), UML et les bases de données.
        </p>
      </Card>
    </section>
  );
}

export default App;
