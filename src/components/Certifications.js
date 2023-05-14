import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import mcp from '../assets/mcp.jpg';
import ms from '../assets/ms.jpg';
import scjp from '../assets/scjp.jpg';
import spring from '../assets/spring.jpg';
import react from '../assets/react.jpg';
import reacta from '../assets/reacta.jpg';
import sdr from '../assets/sdr.jpg';
import smvc from '../assets/smvc.jpg';
import springf from '../assets/springf.jpg';
import scloud from '../assets/scloud.jpg';
import reactn from '../assets/reactn.jpg';
function CertificationCard(props) {
    const { logo, title, issuer, date, id } = props;
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <span>{issuer}</span>
                    <br />
                    <span>Date de délivrance : {date}</span>
                    <br />
                    <span>Identifiant : {id}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function Certifications() {
    const certifications = [
        {
            logo: mcp,
            title: 'Microsoft Certified Professional',
            issuer: 'Microsoft',
            date: 'déc. 2013',
            id: 'E520-1780'
        },
        {
            logo: ms,
            title: 'Microsoft Specialist (HTML5 with JavaScript and CSS3)',
            issuer: 'Microsoft',
            date: 'déc. 2013',
            id: 'E520-1775'
        },
        {
            logo: scjp,
            title: 'Sun Certified Java Programmer',
            issuer: 'Oracle',
            date: 'juil. 2010',
            id: 'SR6595546'
        },
        {
            logo: springf,
            title: 'Spring Framework',
            issuer: 'LearnQuest',
            date: 'mai. 2023',
            id: '8EJL8B82SHYP'
        },
        {
            logo: spring,
            title: 'Spring - Ecosystem and Core',
            issuer: 'LearnQuest',
            date: 'avr. 2023',
            id: 'CJU37ZVCGYBZ'
        },
        {
            logo: react,
            title: 'React Basics',
            issuer: 'Meta',
            date: 'mars 2023',
            id: 'YP33CDZUM99B'
        },
        {
            logo: reacta,
            title: 'Advanced React',
            issuer: 'Meta',
            date: 'avr. 2023',
            id: 'XAAS2FRPEZWC'
        },
        {
            logo: reactn,
            title: 'React Native',
            issuer: 'Meta',
            date: 'mai. 2023',
            id: 'G6JMZ6X5HAY7'
        },
        {
            logo: sdr,
            title: 'Spring Data Repositories',
            issuer: 'LearnQuest',
            date: 'mai. 2023',
            id: 'L8YJRP7J783W'
        },
        {
            logo: smvc,
            title: 'Spring MVC, Spring Boot and Rest Controllers',
            issuer: 'LearnQuest',
            date: 'mai. 2023',
            id: 'BFQ48SD6KH7R'
        },
        {
            logo: scloud,
            title: 'Spring - Cloud Overview',
            issuer: 'LearnQuest',
            date: 'mai. 2023',
            id: 'APYY8AB2QBUW'
        },
        
    ];
    const PAGE_SIZE = 3;
    const [activePage, setActivePage] = React.useState(1);

    const totalPages = Math.ceil(certifications.length / PAGE_SIZE);

    const handleClick = (event) => {
        setActivePage(event.target.text);
    }

    const pages = [];

    for (let number = 1; number <= totalPages; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === activePage} onClick={handleClick}>
                {number}
            </Pagination.Item>,
        );
    }

    const startIndex = (activePage - 1) * PAGE_SIZE;
    const endIndex = activePage * PAGE_SIZE;
    const currentCertifications = certifications.slice(startIndex, endIndex);

    return (
        <div>
            <Row className="my-3">
                {currentCertifications.map(certification => (
                    <Col key={certification.id} xs={12} sm={6} lg={4} className="d-flex">
                        <CertificationCard {...certification} />
                    </Col>
                ))}
            </Row>
            <Row className="my-3">
                <Col>
                    <Pagination>{pages}</Pagination>
                </Col>
            </Row>
        </div>
    );
}

export default Certifications;