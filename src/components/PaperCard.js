import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ReactPaginate from 'react-paginate';

const primaryTextColor = "text-primary";
const itemsPerPage = 10;

const PaperCard = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const offset = currentPage * itemsPerPage;
    const currentPageItems = data.slice(offset, offset + itemsPerPage);

    const handlePageClick = (selected) => {
        setCurrentPage(selected.selected);
    };

    return (
        <div>
            <div className="paper-container">
                {currentPageItems.map((paper, index) => (
                    <div className="paper-row mb-4" key={index}>
                        <div className="paper-col">
                            <Card className="bg-light border">
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">{paper.Authors}</Card.Subtitle>
                                    <Card.Title className={primaryTextColor}>{paper.Title}</Card.Title>
                                    <Card.Text><span className="fw-bold">Source: </span>{paper["Source title"]}</Card.Text>
                                    <Card.Text><span className="fw-bold">Year: </span>{paper.Year}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default PaperCard;
