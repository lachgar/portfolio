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
            logo: spring,
            title: 'Spring - Ecosystem and Core',
            issuer: 'Coursera Course Certificates',
            date: 'avr. 2023',
            id: 'CJU37ZVCGYBZ'
        },
        {
            logo: react,
            title: 'React Basics',
            issuer: 'MetaMeta',
            date: 'mars 2023',
            id: 'YP33CDZUM99B'
        }
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