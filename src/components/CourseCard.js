import React, { useRef, useEffect } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
const CourseCard = ({ courseName, courseObjectives }) => {
    return (
        <div className="course-card">
            <div className="card">
                <Accordion>
                        <AccordionTab header={courseName}>
                            <ul className="course-objectives">
                                {courseObjectives.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                ))}
                            </ul>
                        </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
};

export default CourseCard;
