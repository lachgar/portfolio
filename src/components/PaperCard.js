import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const primaryTextColor = "text-primary";

const PaperCard = ({ data }) => {
return (
<div className="paper-container">
{data.map((paper, index) => (
<div className="paper-row mb-4" key={index}>
<div className="paper-col">
<Card className="bg-light border">
<Card.Body>
<Card.Subtitle className="mb-2 text-muted">{paper.Authors}</Card.Subtitle>
<Card.Title className={primaryTextColor}>{paper.Title}</Card.Title>
<Card.Text><span className="fw-bold">Source: </span>{paper["Source title"]}</Card.Text>
<Card.Text><span className="fw-bold">Year: </span>{paper.Year}</Card.Text>
<Button variant="outline-primary" href={paper.Link}>View Article</Button>
</Card.Body>
</Card>
</div>
</div>
))}
</div>
);
};

export default PaperCard;